import { FC, ReactNode, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AnimatedContainer } from '../animated-container'
import { classNames } from 'src/utils'
import styles from './PreviewLink.module.css'

type Props = {
  href: string
  imageSrc: string
  children: ReactNode
}

export const PreviewLink: FC<Props> = ({ href, imageSrc, children }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className={styles.linkWrapper}>
      <a
        href={href}
        target='_blank'
        rel='noreferrer noffolow'
        className={classNames(styles.link, href === '#' && styles.disabledLink)}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <span>{children}</span>
        <AnimatePresence>
          {isShown && (
            <AnimatedContainer className={styles.card}>
              <img
                src={imageSrc}
                className={styles.cardImage}
                alt='preview-link'
              />
            </AnimatedContainer>
          )}
        </AnimatePresence>
      </a>
    </div>
  )
}
