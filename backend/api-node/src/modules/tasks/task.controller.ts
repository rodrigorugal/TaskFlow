// src/controllers/taskController.ts
import { Request, Response } from "express";
import { Task } from "./task.model";
import { createTaskSchema } from './task.schema';

// src/modules/tasks/task.controller.ts
import { AppError } from '../../middleware/errorHandler';
import { ApiFeatures } from '../../utils/apiFeatures'; // Adjust the path as needed

// GET /tasks?status=TODO&page=2
export const getTasks = async (req: Request, res: Response) => {
  const features = new ApiFeatures(Task.find(), req.query)
    .filter()
    .paginate();

  const tasks = await features.query;
  res.json(tasks);
};

export const getTaskById = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    throw new AppError('Tarefa não encontrada', 404); // ⚠️ Será capturado pelo errorHandler
  }
  res.json(task);
};

export const createTask = async (req: Request, res: Response) => {
  const validatedData = createTaskSchema.parse(req.body); // Validação
  const task = await Task.create(validatedData);
  res.status(201).json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Validação básica do ID
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new AppError('ID inválido', 400);
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      throw new AppError('Tarefa não encontrada', 404);
    }

    res.status(204).send(); // 204 No Content
  } catch (error) {
    // O errorHandler global cuidará dos erros
    throw error;
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  // Validação básica do ID
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new AppError('ID inválido', 400);
  }

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, description, status },
    { new: true }
  );

  if (!updatedTask) {
    throw new AppError('Tarefa não encontrada', 404);
  }

  res.json(updatedTask);
};