import type { FC, HTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'src/utils'
import styles from './Button.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  text: string
  icon?: ReactNode
  tag?: 'a' | 'link'
  to?: string
  href?: string
  target?: '_blank' | '_top'
  type?: 'submit'
  disabled?: boolean
  isLoading?: boolean
  className?: string
  onClick?: () => void
}

export const Button: FC<Props> = ({
  text,
  icon,
  disabled,
  tag,
  to,
  type,
  target,
  href,
  isLoading,
  className,
  onClick,
  ...props
}) => {
  const innerContent = () => {
    return (
      <>
        <span className={styles.text}>
          {isLoading ? <div className={styles.loader} /> : text}
        </span>
        <span className={styles.icon}>{icon}</span>
      </>
    )
  }
  return (
    <>
      {tag === 'link' && to ? (
        <Link
          className={classNames(styles.button, className)}
          to={to}
          {...props}
        >
          {innerContent()}
        </Link>
      ) : tag === 'a' ? (
        <a
          target={target}
          className={classNames(styles.button, className)}
          href={href}
          {...props}
        >
          {innerContent()}
        </a>
      ) : (
        <button
          className={classNames(
            styles.button,
            className,
            disabled && styles.disabled,
          )}
          type={type}
          onClick={onClick}
          {...props}
        >
          <div className={styles.content}>{innerContent()}</div>
        </button>
      )}
    </>
  )
}
