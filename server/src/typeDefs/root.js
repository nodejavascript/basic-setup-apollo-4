// import { gql } from '@apollo/server'

export default `
  scalar Object

  directive @authenticated on FIELD_DEFINITION
  directive @date on FIELD_DEFINITION

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`
