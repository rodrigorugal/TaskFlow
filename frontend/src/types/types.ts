// src/types/types.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "TODO" | "DOING" | "DONE"; // Colunas do Kanban
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}