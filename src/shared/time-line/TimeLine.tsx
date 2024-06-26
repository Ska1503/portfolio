import type { FC } from 'react'
import styles from './TimeLine.module.css'
import { Title } from '../title'
import { Paragraph } from '../paragraph'
import { TfiNewWindow } from 'react-icons/tfi'

type Props = {
  namePlace: string
  namePosition: string
  date: string | number
  description: string
  url: string
  isActiveDot?: boolean
}

export const TimeLine: FC<Props> = ({
  namePlace,
  namePosition,
  date,
  isActiveDot,
  description,
  url,
}) => {
  return (
    <div className={styles.timeLineContainer}>
      <div className={styles.yearsLabel}>
        <p>{date}</p>
      </div>

      <div className={styles.lineWrapper}>
        <span
          className={
            isActiveDot ? `${styles.dot} ${styles.active}` : styles.dot
          }
        />
        <span className={styles.line} />
      </div>

      <div>
        <div className={styles.infoHead}>
          <a
            className={
              url !== '#'
                ? `${styles.link}`
                : `${styles.link} ${styles.disabledLink}`
            }
            href={url}
            target='_blank'
            rel='noreferrer'
          >
            <div className={styles.titleWrap}>
              <Title
                style={{ margin: 0 }}
                tag='h4'
                size='sm'
                fontWeight='regular'
              >
                {namePlace}
              </Title>
              {url !== '#' && <TfiNewWindow size='0.7em' />}
              <small className={styles.dateMobile}>{date}</small>
            </div>
          </a>
          <p className={styles.namePosition}>{namePosition}</p>
        </div>
        <div className={styles.infoWrapper}>
          <Paragraph
            style={{ textAlign: 'left', margin: 0, maxWidth: '500px' }}
          >
            {description}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
