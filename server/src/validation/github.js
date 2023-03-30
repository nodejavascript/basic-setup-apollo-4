import Joi from 'joi'
import { stringRequired } from './common'

const org = stringRequired.min(1).label('org')

export const validateListRepositoriesInput = Joi.object().keys({
  org
})
