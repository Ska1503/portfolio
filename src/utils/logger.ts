/* eslint-disable no-console */
export const logger = (key: string, message: string): void => {
  console.log(
    `%c${key}%c ${message}`,
    'color: red; font-size: 12px;',
    'color: black; font-size: 12px;',
  )
}
