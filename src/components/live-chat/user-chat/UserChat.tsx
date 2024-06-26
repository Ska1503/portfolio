import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChatHead } from './chat-head/ChatHead'
import { ChatFooter } from './chat-footer/ChatFooter'
import { ChatJoin } from './chat-join/ChatJoin'
import { useTranslation } from 'react-i18next'
import { ChatMessagesMemo } from './chat-messages/ChatMessages'
import { NotificationIcon } from './chat-notification-icon/NotificationIcon'
import { IoChatbubbles } from 'react-icons/io5'
import { useAuthUser, useSocketApi } from 'src/app'
import { soundResponseMessage } from 'src/assets'
import { KEY, CLOSE, OPEN, ADMIN } from 'src/constants'
import {
  useLocalStorage,
  useChatManagement,
  usePositionChatWindow,
  useDraggable,
} from 'src/hooks'
import { Button, ChatSkeleton } from 'src/shared'
import { playSoundsInChat } from 'src/utils'
import { MessageType } from 'src/types'
import styles from './UserChat.module.css'

export const UserChat = () => {
  const [openChat, setOpenChat] = useLocalStorage(KEY, CLOSE)
  const [isZoomWindow, setIsZoomWindow] = useState<boolean>(false)
  const [isShowNotification, setIsShowNotification] = useState<boolean>(false)
  const [notificationCount, setNotificationCount] = useState<number>(0)

  const isOpenChat = openChat === OPEN

  const { t } = useTranslation()
  const { userName, userId, isJoined } = useAuthUser()

  const socket = useSocketApi({
    userName: userName,
    connectSocket: isJoined,
  })

  const {
    messages,
    userMessages,
    isLoadingMessages,
    isFetchingMessages,
    isErrorMessages,
    isLoadingDeleteChat,
    isLoadingDeleteChatHistory,
    onDeleteChatHistory,
    onLeave,
    onDeleteChat,
    setNewMessages,
    addNewMessage,
    refetchUserById,
  } = useChatManagement({ skipFetchUsersList: true, userId })

  const { messagesContainerRef } = usePositionChatWindow({
    dependencies: [messages, openChat],
  })

  const chatWindowRef = useDraggable<HTMLDivElement>({
    isVisibleElement: isOpenChat,
  })

  useEffect(() => {
    if (userName) refetchUserById()
  }, [userName, refetchUserById])

  useEffect(() => {
    if (isErrorMessages) onLeave()
  }, [isErrorMessages, onLeave])

  useEffect(() => {
    if (!userMessages?.messages) return

    setNewMessages(userMessages?.messages)
  }, [setNewMessages, userMessages])

  useEffect(() => {
    if (!socket) return

    const handleResponse = (message: MessageType) => {
      addNewMessage(message)

      if (message.receiver === userId) {
        playSoundsInChat(soundResponseMessage)

        if (!isOpenChat) {
          setIsShowNotification(true)
          setNotificationCount(prevCount => prevCount + 1)
        }
      }
    }

    socket.on('response', handleResponse)

    return () => {
      socket.off('response', handleResponse)
    }
  }, [userId, socket, isOpenChat, addNewMessage])

  const onToggleChat = useCallback(() => {
    setOpenChat(isOpenChat ? CLOSE : OPEN)
    setIsShowNotification(false)
    setNotificationCount(0)
  }, [isOpenChat, setOpenChat])

  const onToggleZoomWindow = () => setIsZoomWindow(prevZoom => !prevZoom)

  const onLeaveAndDeleteChat = () => {
    onDeleteChat()
    setIsZoomWindow(false)
  }

  const filteredMessages = useMemo(
    () =>
      messages.filter(msg => msg.receiver === userId || msg.sender === userId),
    [messages, userId],
  )

  const isLoading =
    isLoadingMessages ||
    isFetchingMessages ||
    isLoadingDeleteChat ||
    isLoadingDeleteChatHistory

  return (
    <>
      {!isOpenChat && (
        <div className={styles.openButton}>
          <Button
            onClick={onToggleChat}
            text='Live Chat'
            icon={<IoChatbubbles size={'1.2em'} />}
          />
          {isShowNotification && <NotificationIcon count={notificationCount} />}
        </div>
      )}

      {isOpenChat && (
        <div
          ref={chatWindowRef}
          className={
            isZoomWindow ? `${styles.chat} ${styles.zoomWindow}` : styles.chat
          }
        >
          <ChatHead
            onToggleChat={onToggleChat}
            onDeleteChat={onLeaveAndDeleteChat}
            onDeleteChatHistory={onDeleteChatHistory}
            onToggleZoomWindow={onToggleZoomWindow}
            isJoinedUser={isJoined}
            showDeleteHistory={!!filteredMessages.length}
          />
          {isJoined ? (
            isLoading ? (
              <ChatSkeleton />
            ) : (
              <>
                <ChatMessagesMemo
                  ref={messagesContainerRef}
                  messages={filteredMessages}
                  adminSender={ADMIN}
                  userName={userName}
                />
              </>
            )
          ) : (
            <ChatJoin />
          )}
          <ChatFooter
            userId={userId}
            socket={socket}
            isDisabledInput={isLoading || !isJoined}
            placeholder={t('input.placeholder.YOUR_MESSAGE')}
          />
        </div>
      )}
    </>
  )
}
