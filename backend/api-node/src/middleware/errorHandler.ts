import { ErrorRequestHandler } from 'express';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 400
  ) {
    super(message);
  }
}

export const errorHandler: ErrorRequestHandler = (
  err: Error | AppError,
  req,
  res,
  next
) => {
  // Não retornamos nada explicitamente
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    return;
  }

  console.error('Erro não tratado:', err);
  res.status(500).json({
    status: 'error',
    message: 'Erro interno no servidor',
  });
};