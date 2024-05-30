import { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import { chatPhoto } from 'src/assets'
import { Avatar, Paragraph } from 'src/shared'
import styles from './ChatHead.module.css'

type Props = {
  onToggleChat: () => void
}

export const ChatHead: FC<Props> = ({ onToggleChat }) => {
  return (
    <div className={styles.chatHeadContainer}>
      <div className={styles.contactWrap}>
        <Avatar className={styles.avatar} src={chatPhoto} />
        <div className={styles.contact}>
          <Paragraph>Vlad</Paragraph>
          <Paragraph className={styles.status}>online</Paragraph>
        </div>
      </div>
      <button className={styles.closeButton} onClick={onToggleChat}>
        <IoClose size={'2em'} />
      </button>
    </div>
  )
}
