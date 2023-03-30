import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils'
import { defaultFieldResolver } from 'graphql'

export const AuthenticatedDirective = (schema, directiveName) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: fieldConfig => {
      const directive = getDirective(schema, fieldConfig, directiveName)

      const upperDirective = directive && directive[0]

      if (upperDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig

        fieldConfig.resolve = async function (...args) {
          /*
            const [, , { req }] = args
            the follow with throw an error if !user
            const user = await returnAuthenticatedUser(req)
            args.push(user)
          */

          return resolve.apply(this, args)
        }
      }
    }
  })
}
