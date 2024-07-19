import { useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  isAnimateOnce?: boolean
}

export const useAnimateDuringScroll = ({ isAnimateOnce = true }: Props) => {
  const refInView = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const isInView = useInView(refInView, {
    once: isAnimateOnce,
    margin: '-100px',
  })

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1 })
    } else {
      controls.start({ opacity: 0 })
    }
  }, [controls, isInView])

  return { refInView, controls }
}
