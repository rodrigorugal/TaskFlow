import { AppError } from './errorHandler';
// middleware/validators.ts
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';


const idSchema = z.string().regex(/^[0-9a-fA-F]{24}$/, 'ID inválido');

export const validateIdParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    idSchema.parse(req.params.id);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      next(new AppError(error.errors[0].message, 400));
    }
  }
};