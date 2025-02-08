import Joi from 'joi';

export const createPublication = {
  title: Joi.string().min(5).required().messages({
    'any.required': 'publication title is required',
    'string.min': 'publication title must be at least 5 characters long',
  }),
  body: Joi.string().min(10).max(50).required().messages({
    'any.required': 'publication body is required',
    'string.min': 'publication body must be at least 5 characters long',
    'string.max': 'publication body must be less than 50 characters',
  }),
  author: Joi.number().integer().min(1).required().messages({
    'any.required': 'password is required',
    'integer.min': 'author id must be a positive integer',
  }),
};


export const updatePublication = {
  title: Joi.string().min(5).optional().messages({
    'any.required': 'publication title is required',
    'string.min': 'publication title must be at least 5 characters long',
  }),
  body: Joi.string().min(10).max(50).optional().messages({
    'any.required': 'publication body is required',
    'string.min': 'publication body must be at least 5 characters long',
    'string.max': 'publication body must be less than 50 characters',
  }),
  author: Joi.number().integer().min(1).optional().messages({
    'any.required': 'password is required',
    'integer.min': 'author id must be a positive integer',
  }),
};
