import { returnPing } from '../logic'

export default {
  Query: {
    ping: async (root, args, { req, res }, info) => returnPing()
  }
}
