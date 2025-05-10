// src/routes/taskRoutes.ts
import { Router } from "express";
import { getTaskById, getTasks, createTask, deleteTask } from "./task.controller";
import { validateIdParam } from '../../middleware/validators'; // Ajuste o caminho conforme necessário

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);
router.delete('/tasks/:id', validateIdParam, deleteTask);

export default router;
