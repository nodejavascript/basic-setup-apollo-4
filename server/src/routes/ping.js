import { Router } from 'express'

import { returnPing } from '../logic'

export default Router().get('/', async (req, res) => {
  const ping = returnPing()
  return res.status(200).json(ping)
})
