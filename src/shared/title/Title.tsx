import type { FC, HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { classNames } from 'src/utils'
import styles from './Title.module.css'

export type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: 'xs' | 'sm' | 'lg'
  fontWeight?: 'normal' | 'regular' | 'bold'
  withGradient?: boolean
  className?: string
}

export const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, tag, size, fontWeight, withGradient, className, ...props }, ref) => {
    const Tag = tag || 'h1'

    return (
      <Tag
        ref={ref}
        className={classNames(
          styles.title,
          className,
          withGradient && styles.gradient,
          size && styles[size],
          fontWeight && styles[fontWeight],
        )}
        {...props}
      >
        {children}
      </Tag>
    )
  },
)

export const MTitle = motion(Title)
