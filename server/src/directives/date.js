import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { defaultFieldResolver } from 'graphql'

import { datatimeFormatted, fromNow } from '../lib'

export const DateDirective = (schema, directiveName) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: fieldConfig => {
      const directive = getDirective(schema, fieldConfig, directiveName)

      const upperDirective = directive && directive[0]

      if (upperDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig

        fieldConfig.resolve = async function (...args) {
          const result = await resolve(...args)

          const [, input] = args
          const { format } = input

          if (format === 'fromNow') return fromNow(result)

          return datatimeFormatted(result)
        }

        return fieldConfig
      }
    }
  })
}
