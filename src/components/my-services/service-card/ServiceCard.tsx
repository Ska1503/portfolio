import type { FC } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Paragraph, Title } from 'src/shared'
import styles from './ServiceCard.module.css'

type Props = {
  title: string
  text: string
  closeText: string
  showText: string
  isFlipped: boolean
  order: number
  onFlip: () => void
}

export const ServiceCard: FC<Props> = ({
  title,
  text,
  order,
  isFlipped,
  onFlip,
}) => {
  return (
    <div
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}
    >
      <div className={styles.card} onClick={onFlip}>
        <div className={styles.cardFront}>
          <span className={styles.num}>{`0${order}.`}</span>
          <Title style={{ margin: 0 }} tag='h4' size='sm' fontWeight='regular'>
            {title}
          </Title>
          <button
            onClick={e => {
              e.stopPropagation()
              onFlip()
            }}
            className={styles.moreButton}
          >
            <GoArrowUpRight />
          </button>
        </div>

        <div className={styles.cardBack}>
          <Paragraph style={{ margin: 0 }}>{text}</Paragraph>
        </div>
      </div>
    </div>
  )
}
