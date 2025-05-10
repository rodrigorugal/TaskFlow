// src/modules/tasks/task.schema.ts
import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string().min(3, "Título muito curto"),
  status: z.enum(['TODO', 'DOING', 'DONE']).optional().default('TODO'),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;