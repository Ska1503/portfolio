import { FC, ReactNode, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

type Props = {
  children: ReactNode

  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  yOffset?: number
  blur?: string
}

export const TransitionContainer: FC<Props> = ({
  children,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = '5px',
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const inViewResult = useInView(ref, { once: true })

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inViewResult ? 'visible' : 'hidden'}
        exit='hidden'
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
