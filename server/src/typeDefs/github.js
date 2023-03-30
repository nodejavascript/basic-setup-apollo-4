
export default `
  extend type Query {
    listRepositories (listRepositoriesInput: ListRepositoriesInput!): [Repository]
  }

  type Repository {
    id: String
    name: String
    full_name: String
    description: String
    size: Int
    owner: Owner
    html_url: String
    ssh_url: String
    updated_at (format: String): String @date
  }

  type Owner {
    login: String
    avatar_url: String
  }

  input ListRepositoriesInput {
    org: String
  }
`
