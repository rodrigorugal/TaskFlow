// src/components/TaskCard.tsx
import { Draggable } from "react-beautiful-dnd";
import { Card, CardContent, Typography } from "@mui/material";

export const TaskCard = ({ task, index }: { task: Task; index: number }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ marginBottom: "8px" }}
        >
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography>{task.description}</Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};