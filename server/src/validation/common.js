import Joi from 'joi'

export const objectId = Joi.string().pattern(/^[a-f\d]{24}$/i).messages({
  'string.pattern.base': 'Invalid id pattern'
}).required().messages()

export const stringRequired = Joi.string().required().messages()
export const stringNotRequired = Joi.allow('').allow(null).messages()

export const numberRequired = Joi.number().required().messages()
export const numberNotRequired = Joi.number().allow('').allow(null).messages()

export const booleanRequired = Joi.boolean().required().messages()
export const booleanNotRequired = Joi.boolean().allow(null).messages()
