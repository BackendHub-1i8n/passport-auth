import Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().min(4).required().messages({
    'any.required': 'user name is required',
  }),
  lastName: Joi.string().min(4).required().messages({
    'any.required': 'last name is required',
  }),
  email: Joi.string().min(4).email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'invalid email address',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'password is required',
    'string.min': 'password must be at least 6 characters long',
  }),
  profile: Joi.string().required().messages({
    'any.required': 'profile is required',
  }),
  role: Joi.string().required().messages({
    'any.required': 'role is required',
  })
});


export const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'invalid email address',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'password is required',
    'string.min': 'password must be at least 6 characters long',
  }),
})
