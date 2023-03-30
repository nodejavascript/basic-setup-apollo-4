import fetch from 'node-fetch'
import { validateListRepositoriesInput } from '../validation'

const { GITHUB_TOKEN } = process.env

const githubPrefix = 'https://api.github.com'

const returnAuthHeaders = () => {
  const headers = { }
  headers.Accept = 'application/vnd.github+json'
  headers.Authorization = `Bearer ${GITHUB_TOKEN}`
  headers['X-GitHub-Api-Version'] = '2022-11-28'
  return headers
}

export default {
  Query: {
    listRepositories: async (root, args, { req, res }, info) => {
      const { listRepositoriesInput } = args
      await validateListRepositoriesInput.validateAsync(listRepositoriesInput, { abortEarly: false })

      const { org } = listRepositoriesInput
      const endpoint = `${githubPrefix}/users/${org}/repos`
      const headers = returnAuthHeaders()
      const response = await fetch(endpoint, { headers })
      return response.json()
    }
  }
}
