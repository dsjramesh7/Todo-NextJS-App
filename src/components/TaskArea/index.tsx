import React from "react";
import AddTodoComponent from "../AddTodoComponent";
import TaskListArea from "../TaskListArea";

const TaskArea = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mt-3">
        <AddTodoComponent />
      </div>
      <div className="border border-purple-400">
        <TaskListArea />
      </div>
    </div>
  );
};

export default TaskArea;
