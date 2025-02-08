import { NextFunction, Request, Response } from "express";

export const validateSchema = (schema: any, property: keyof Request) => (req: Request, res: Response, next: NextFunction) => {
  const data = req[property];
  const { error } = schema.validate(data, { abortEarly: false });
  if (error) {
    return void res
      .status(400)
      .json({ errors: error.details.map((err: any) => err.message) });
  }
  next();
};
