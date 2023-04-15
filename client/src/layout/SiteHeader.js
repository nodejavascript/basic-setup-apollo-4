import React from 'react'
import { Card, Space, Avatar, Typography } from 'antd'

const { Text, Title } = Typography

const { REACT_APP_GITHUB_ORG } = process.env

const SiteTitle = () => {
  return (
    <Space align='center' size='large' style={{ margin: 6 }}>
      <Avatar size={64} shape='square' src='https://res.cloudinary.com/nodejavascript-com/image/upload/v1674927362/nodejavascript.com/nodejavascript_logo_wfhw50.png' />
      <Title level={3}>{REACT_APP_GITHUB_ORG}</Title>
    </Space>
  )
}

const SiteHeader = () => {
  return (
    <Card
      title={<SiteTitle />}
    >
      <Text italic>
        basic-setup-apollo-4:client
      </Text>
    </Card>
  )
}

export default SiteHeader
