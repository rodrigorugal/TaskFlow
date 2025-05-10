import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import taskRoutes from './modules/tasks/task.routes';

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use('/api', taskRoutes);

// Error handler - DEVE ser o último middleware
app.use(errorHandler as express.ErrorRequestHandler); // Cast explícito

export default app;