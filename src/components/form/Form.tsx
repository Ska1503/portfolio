import type { CSSProperties, FC } from 'react'
import { useSendEmail } from 'src/hooks'
import {
  Title,
  Input,
  Textarea,
  Button,
  Paragraph,
  SocialList,
} from '../shared'
import { useTranslation } from 'react-i18next'
import { VALIDATE_EMAIL } from 'src/constants'
import { FORM_FIELDS } from 'src/types'
import styles from './Form.module.css'

type Props = {
  onCloseModal: () => void
}

export const Form: FC<Props> = ({ onCloseModal }) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    handleChange,
    errors,
    isSendFormError,
    isLoading,
    isDisabledButton,
    onSubmit,
  } = useSendEmail({
    fn: onCloseModal,
    successMessage: t('toast.success.EMAIL_SENT'),
    infoMessage: t('toast.info.FIXING'),
  })

  return (
    <>
      {!isSendFormError && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title tag='h2'>{t('form.TITLE')}</Title>
          <Input
            {...register(FORM_FIELDS.SENDER, {
              required: true,
              minLength: 3,
            })}
            id='form-input-name'
            type='text'
            onChange={handleChange(FORM_FIELDS.SENDER)}
            error={!!errors.nameSender}
            errorText={
              errors.nameSender?.type === 'minLength'
                ? t('form.error.SHORT_NAME')
                : t('form.error.ENTER_NAME')
            }
            placeholder={t('input.placeholder.YOUR_NAME')}
            aria-label='Enter your name'
          />
          <Input
            {...register(FORM_FIELDS.FROM, {
              required: t('form.error.ENTER_EMAIL'),
              pattern: {
                value: VALIDATE_EMAIL,
                message: t('form.error.EMAIL_NOT_VALID'),
              },
            })}
            id='form-input-email'
            type='email'
            onChange={handleChange(FORM_FIELDS.FROM)}
            error={!!errors.from}
            errorText={errors.from?.message}
            placeholder={t('input.placeholder.YOUR_EMAIL')}
            aria-label='Enter your email'
          />
          <Textarea
            {...register(FORM_FIELDS.TEXT, { required: true, minLength: 10 })}
            rows={7}
            cols={50}
            id='form-textarea-message'
            onChange={handleChange(FORM_FIELDS.TEXT)}
            error={!!errors.text}
            errorText={
              errors.text?.type === 'minLength'
                ? t('form.error.SHORT_MESSAGE')
                : t('form.error.ENTER_MESSAGE')
            }
            placeholder={t('input.placeholder.YOUR_MESSAGE')}
            aria-label='Enter your message'
          />
          <Button
            style={additionalButtonStyles}
            isLoading={isLoading}
            type='submit'
            disabled={isDisabledButton}
            aria-label='Send message'
          >
            {t('button.SEND_MESSAGE')}
          </Button>
        </form>
      )}
      <div className={styles.contacts}>
        <Paragraph style={{ margin: '15px 0 15px' }}>
          {!isSendFormError
            ? t('form.TEXT_ME_MESSENGERS')
            : t('form.error.CONTACT_ME_IF_ERROR')}
        </Paragraph>
        <SocialList visibleIds={[1, 2]} />
      </div>
    </>
  )
}

const additionalButtonStyles: CSSProperties = {
  width: '100%',
  padding: '10px',
  fontSize: '12px',
}
