import { CHECK_URL } from 'src/constants'

export const formatMessage = (text: string): string => {
  return text.replace(
    CHECK_URL,
    '<a href="$1" target="_blank" style="text-decoration: underline;">$1</a>',
  )
}
