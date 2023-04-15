import React from 'react'

import PingResults from './PingResults'
import GithubListRepositories from './GithubListRepositories'

import { Space } from 'antd'

const Home = () => {
  return (
    <Space
      direction='vertical'
      style={{ display: 'flex' }}
      size='large'
    >
      <PingResults />
      <GithubListRepositories />
    </Space>
  )
}

export default Home
