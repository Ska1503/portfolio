import { useEffect, useState, type FC } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
import { classNames } from 'src/utils'
import styles from './FlipWord.module.css'
import { Paragraph } from 'src/components/shared'

type Props = {
  words: { id: number; content: string }[]
  duration?: number
  classNameText?: string
}

export const FlipWord: FC<Props> = ({
  words,
  classNameText,
  duration = 3000,
}) => {
  /*
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(state => {
        if (state >= words.length - 1) return 0
        return state + 1
      })
    }, duration)
    return () => clearInterval(id)
  }, [duration, words.length]) */

  return (
    <div className={styles.flipWordContainer}>
      {/* <AnimatePresence>
        <motion.b
          key={words[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: 'easeInOut' }}
          className={classNames(styles.words, classNameText)}
        >
          {words[index].content}
        </motion.b>
      </AnimatePresence> */}
      <Paragraph className={classNames(styles.words, classNameText)}>Frontend Developer</Paragraph>
    </div>
  )
}
