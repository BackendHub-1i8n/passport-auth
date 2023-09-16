export const validateSchema = (schema, property) => (req, res, next) => {
  const data = req[property];
  const { error } = schema.validate(data, { abortEarly: false });
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }
  next();
};
