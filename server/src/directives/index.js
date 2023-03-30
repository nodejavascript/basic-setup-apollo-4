import { AuthenticatedDirective } from './authentication'
import { DateDirective } from './date'

export const applyDirectives = schema => {
  schema = AuthenticatedDirective(schema, 'authenticated')
  schema = DateDirective(schema, 'date')
  return schema
}
