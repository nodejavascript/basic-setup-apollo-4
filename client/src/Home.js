import React from 'react'

import PingResults from './PingResults'
import GithubListRepositories from './GithubListRepositories'

import { Card, Space } from 'antd'

const Home = () => {
  return (
    <Card
      type='inner'
      title='Home'
    >
      <Space
        direction='vertical'
        style={{ display: 'flex' }}
        size='large'
      >
        <PingResults />
        <GithubListRepositories />
      </Space>
    </Card>
  )
}

export default Home
