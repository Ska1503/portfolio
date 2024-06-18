import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './ButtonWithIcon.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  className?: string
}

export const ButtonWithIcon: FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
      {...props}
    >
      {children}
    </button>
  )
}
