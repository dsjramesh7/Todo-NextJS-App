import React from "react";
import Categories from "../Categories";
import TaskArea from "../TaskArea";

const TodoMainComponent = () => {
  return (
    <div className="flex gap-2 border border-red-500 h-4/5 w-4/5">
      <div className="w-1/5">
        <Categories />
      </div>
      <div className="w-4/5">
        <TaskArea />
      </div>
    </div>
  );
};

export default TodoMainComponent;
