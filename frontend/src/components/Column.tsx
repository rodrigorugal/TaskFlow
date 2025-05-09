// src/components/Column.tsx
import { Droppable } from "react-beautiful-dnd";
import { TaskCard } from "./TaskCard";
// Adicione no seu componente Column
import styled from "styled-components";

const ColumnContainer = styled.div`
  background: #f7f7f7;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 300px;
`;

export const Column = ({ column }: { column: Column }) => {
  return (
    <div style={{ width: "300px", margin: "8px" }}>
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ minHeight: "400px", background: "#f0f0f0", padding: "8px" }}
          >
            {column.tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};