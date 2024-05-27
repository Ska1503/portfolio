import { format } from 'date-fns'
import { FORMAT_DATE, FORMAT_TIME } from '../constans'

export const formatDateTime = (timestamp: number, showDate?: boolean) =>
  format(new Date(timestamp), `${FORMAT_TIME} ${showDate ? FORMAT_DATE : ''}`)