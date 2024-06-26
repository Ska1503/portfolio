import {
  forwardRef,
  type ChangeEvent,
  type FC,
  type InputHTMLAttributes,
} from 'react'
import styles from './Input.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  value?: string
  errorText?: string
  error?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, error, errorText, ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <input
          className={error ? `${styles.input} ${styles.error}` : styles.input}
          value={value}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        {error && (
          <p className={styles.errorMessage}>{errorText || 'Some errors'}</p>
        )}
      </div>
    )
  },
)
