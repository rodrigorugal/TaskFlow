// src/models/Task.ts
import { Schema, model } from 'mongoose';

// src/models/Task.ts
const TaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['TODO', 'DOING', 'DONE'], default: 'TODO' }
}, {
  timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v; // Remove __v dos dados retornados
      return ret;
    }
  }
});

export const Task = model('Task', TaskSchema);