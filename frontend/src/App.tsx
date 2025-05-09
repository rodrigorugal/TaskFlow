
// src/App.tsx
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { TaskProvider } from "./contexts/TaskContext";
import { Column } from "./components/Column";

export const App = () => {
  const { columns, setColumns } = useContext(TaskContext);

  const onDragEnd = (result: DropResult) => {
    // Lógica para atualizar o estado quando uma tarefa é arrastada
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns.find(col => col.id === source.droppableId);
    const destCol = columns.find(col => col.id === destination.droppableId);
    // Atualize o estado aqui...
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