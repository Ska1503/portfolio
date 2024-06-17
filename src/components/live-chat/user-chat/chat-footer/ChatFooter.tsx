import { ChangeEvent, FormEvent, forwardRef } from 'react'
import { SendMessageChatButton, Textarea } from 'src/shared'
import styles from './ChatFooter.module.css'

type Props = {
  value: string
  placeholder: string
  isDisabledButton: boolean
  isDisabledInput: boolean
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  sendMessage: (e: FormEvent) => Promise<void>
}

export const ChatFooter = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      value,
      onChange,
      onKeyDown,
      sendMessage,
      placeholder,
      isDisabledButton,
      isDisabledInput,
    },
    ref,
  ) => {
    return (
      <form onSubmit={sendMessage} className={styles.chatFooterWrap}>
        <Textarea
          ref={ref}
          id='chat-textarea'
          value={value}
          disabled={isDisabledInput}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          rows={1}
        />
        <SendMessageChatButton isDisabled={isDisabledButton} />
      </form>
    )
  },
)
