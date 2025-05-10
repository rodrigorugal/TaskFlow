// src/middleware/security.ts
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Proteção contra headers maliciosos
export const securityMiddleware = [
  helmet(),
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limite de requisições por IP
  })
];