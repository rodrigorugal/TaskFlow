// src/app.ts
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/TaskRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);

export default app;