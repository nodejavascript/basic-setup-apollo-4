import React from 'react'

import { Typography, Card, Space } from 'antd'
const { Link } = Typography

const notes = [
  {
    title: 'GitHub',
    href: 'https://github.com/nodejavascript/basic-setup-apollo-4',
    linkText: 'Readme'
  },
  {
    title: 'Created by',
    href: 'https://github.com/nodejavascript',
    linkText: '@nodejavascript'
  }
]

const SiteFooter = () => {
  return (
    <Space wrap>
      {
        notes.map((note, index) => {
          const { title, href, linkText } = note

          return (
            <Card key={`footerNote${index}`} title={title}>
              <Link href={href}>
                {linkText}
              </Link>
            </Card>
          )
        })
      }
    </Space>
  )
}

export default SiteFooter
