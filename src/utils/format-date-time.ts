import { format } from 'date-fns'
import { FORMAT_DATE, FORMAT_TIME } from 'src/constants'

export const formatDateTime = (
  timestamp: number | string,
  showDate?: boolean,
): string =>
  format(new Date(timestamp), `${FORMAT_TIME} ${showDate ? FORMAT_DATE : ''}`)
