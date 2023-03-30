export default `
  extend type Query {
    ping: Ping
  }

  type Ping {
    timestamp: String
    version: String
  }
`
