import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function formatTimeUtil(
  utcTime: string,
  DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
) {
  return dayjs.utc(utcTime).utcOffset(8).format(DATE_TIME_FORMAT)
}
