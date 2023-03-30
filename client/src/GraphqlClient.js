import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const { REACT_APP_GRAPHQL_URI, NODE_ENV } = process.env

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  },
  mutate: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  }
}

const httpLink = new HttpLink({ uri: REACT_APP_GRAPHQL_URI })

const errorLink = onError(({ graphQLErrors, networkError, response, operation, forward }) => {
  graphQLErrors && graphQLErrors.forEach(({ message, locations, path }) => {
    if (NODE_ENV === 'development') {
      console.log('GraphqlClient errorLink: ', '\nmessage', message, '\nlocations', locations, '\npath', path)
    }
  })

  if (networkError) {
    if (NODE_ENV === 'development') {
      console.log('GraphqlClient errorLink', 'networkError', networkError)
    }
  }
  return forward(operation)
})

const GraphqlClient = ({ children, user }) => {
  const setHeaders = new ApolloLink((operation, forward) => {
    const requiredHeaders = {
      'Content-Type': 'application/json'
    }

    operation.setContext(({ headers }) => ({
      headers: {
        ...requiredHeaders,
        ...headers
      }
    }))

    return forward(operation)
  })

  const client = new ApolloClient({
    link: from([setHeaders, errorLink, httpLink]),
    cache: new InMemoryCache(),
    credentials: 'include',
    defaultOptions
  })

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default GraphqlClient
