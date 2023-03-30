import dayjs from 'dayjs'
import ms from 'ms'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export const datatimeFormatted = () => dayjs().format('L LT')

export const fromNow = date => dayjs(date).fromNow()

export const toUnix = date => dayjs(date).unix()

export const getExpires = expiresIn => dayjs().add(ms(expiresIn), 'millisecond').toISOString()

export const checkExpired = expires => dayjs().isAfter(expires)

export const tick = () => dayjs().valueOf()
