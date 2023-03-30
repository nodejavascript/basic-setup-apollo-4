import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import { Card, Avatar, List, Typography, Space } from 'antd'
const { Text, Link, Title } = Typography

const { REACT_APP_GITHUB_ORG } = process.env

const QUERY_GITHUB = gql`
  query queryListRepositories {
    listRepositories (
      listRepositoriesInput: {
        org: "${REACT_APP_GITHUB_ORG}"
      }
    ) {
      id
      name
      full_name
      description
      size
      html_url
      sshUrl: ssh_url
      updated: updated_at
      updatedAgo: updated_at (format: "fromNow")
      owner {
        login
        avatar_url
      }
    }
  }
`

const ItemDescription = ({ item }) => {
  const { description, sshUrl, updatedAgo, updated } = item
  return (
    <Space
      direction='vertical'
      style={{ display: 'flex' }}
    >
      <Title type='success' level={5}>{description}</Title>

      <Text>
        Updated {updatedAgo} on {updated}
      </Text>

      <Text code copyable>{`git clone ${sshUrl}`}</Text>
    </Space>
  )
}

const GithubListRepositories = () => {
  const { loading, error, data } = useQuery(QUERY_GITHUB)
  const [listRepositories, setListRepositories] = useState()

  useEffect(() => {
    if (data?.listRepositories) return setListRepositories(data.listRepositories)
  }, [data, setListRepositories])

  useEffect(() => {
    if (error) console.error('GithubListRepositories', error)
  }, [error])

  return (
    <Card
      type='inner'
      title='GithubListRepositories'
      loading={loading}
    >
      <List
        itemLayout='vertical'
        dataSource={listRepositories}
        renderItem={(item, index) => (
          <List.Item>

            <List.Item.Meta
              avatar={<Avatar size='large' src={item.owner.avatar_url} />}
              title={<Link href={item.html_url}>{item.full_name}</Link>}
              description={<ItemDescription item={item} />}
            />

          </List.Item>
        )}
      />
    </Card>
  )
}

export default GithubListRepositories
