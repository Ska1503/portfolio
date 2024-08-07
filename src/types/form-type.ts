export type FormType = {
  from: string
  text: string
  to?: string
  subject?: string
  nameSender?: string
}

export type FormPayload = FormType

export enum FORM_FIELDS {
  SENDER = 'nameSender',
  FROM = 'from',
  TEXT = 'text',
}
