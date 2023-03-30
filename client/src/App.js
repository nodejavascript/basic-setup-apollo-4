import React from 'react'

import GraphqlClient from './GraphqlClient'
import Home from './Home'

const App = () => {
  return (
    <GraphqlClient>

      <Home />

    </GraphqlClient>
  )
}

export default App
