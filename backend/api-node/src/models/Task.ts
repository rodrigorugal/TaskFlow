// src/models/Task.ts
import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['TODO', 'DOING', 'DONE'], default: 'TODO' },
  createdAt: { type: Date, default: Date.now }
});

export const Task = model('Task', TaskSchema);