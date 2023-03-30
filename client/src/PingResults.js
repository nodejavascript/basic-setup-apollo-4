import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import { Card, Typography } from 'antd'
const { Text } = Typography

const QUERY_PING = gql`
  query queryPing {
    ping {
      timestamp
      version
    }
  }
`

const PingResults = () => {
  const { loading, error, data } = useQuery(QUERY_PING)
  const [ping, setPing] = useState()

  useEffect(() => {
    if (data?.ping) return setPing(JSON.stringify(data.ping))
  }, [data, setPing])

  useEffect(() => {
    if (error) console.error('PingResults', error)
  }, [error])

  return (
    <Card
      type='inner'
      title='PingResults'
      loading={loading}
    >
      <Text code>{ping && ping}</Text>
    </Card>
  )
}

export default PingResults
