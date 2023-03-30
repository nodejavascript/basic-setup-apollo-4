import pkg from '../../package.json'

import { datatimeFormatted } from '../lib'

export const returnVersion = () => {
  const version = pkg.version
  return `v${version}`
}

export const returnPing = () => {
  const timestamp = datatimeFormatted()
  const version = returnVersion()

  return { timestamp, version }
}

export const keyExists = (object, key) => {
  const keys = Object.keys(object)
  if (keys.length === 0) return false

  return Boolean(keys.find(i => i === key))
}

export const arrayKeySum = (array, key) => {
  if (!array) throw new Error('arrayKeySum requires array')
  if (!key) throw new Error('arrayKeySum requires key')

  if (!array.length === 0) return 0

  const sum = array.reduce((previousValue, currentValue) => previousValue + currentValue[key], 0)
  if (!sum) return 0

  return sum
}
