
// src/App.tsx
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useContext } from "react";
import { TaskProvider, TaskContext } from "./contexts/TaskContext";
import { Column } from "./components/Column";

export const App = () => {
  const { columns } = useContext(TaskContext);

  const onDragEnd = (result: DropResult) => {
    // Lógica para atualizar o estado quando uma tarefa é arrastada
    const { destination } = result;
    if (!destination) return;

    const destCol = columns.find(col => col.id === destination.droppableId);
    if (destCol) {
      // Atualize o estado aqui usando destCol...
      console.log("Destination column found:", destCol);
    }
  };

  return (
    <TaskProvider>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex", padding: "20px" }}>
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </div>
      </DragDropContext>
    </TaskProvider>
  );
};