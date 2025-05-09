// src/contexts/TaskContext.tsx
import { createContext, useState } from "react";
import { Column, Task } from "../types/types";

export const TaskContext = createContext<{
  columns: Column[];
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
}>({
  columns: [],
  setColumns: () => {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "TODO",
      title: "A Fazer",
      tasks: [],
    },
    // Adicione "DOING" e "DONE"...
    
  ]);

  return (
    <TaskContext.Provider value={{ columns, setColumns }}>
      {children}
    </TaskContext.Provider>
  );
};