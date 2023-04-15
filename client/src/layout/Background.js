import React from 'react'

import { Row } from 'antd'

const style = {
  padding: 16,
  backgroundImage: 'url(https://res.cloudinary.com/nodejavascript-com/image/upload/v1676563175/word-cloud/white_wall_hash_ofze1t.png)',
  backgroundRepeat: 'repeat',
  minHeight: '100%'
}

const Background = ({ children }) => <Row align='center' style={style}>{children}</Row>

export default Background
