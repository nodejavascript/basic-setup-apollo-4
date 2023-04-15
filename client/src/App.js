import React from 'react'

import SiteWrapper from './layout/SiteWrapper'
import GraphqlClient from './GraphqlClient'
import Home from './Home'

const App = () => {
  return (
    <GraphqlClient>

      <SiteWrapper>
        <Home />
      </SiteWrapper>

    </GraphqlClient>
  )
}

export default App
