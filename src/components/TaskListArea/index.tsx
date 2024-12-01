"use client";
import { deleteTodo } from "@/redux/features/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";

const TaskListArea = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  // console.log("todos", todos);

  // deleteTodo function
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="px-4 flex-col gap-2">
      {todos && todos.length > 0 ? (
        <>
          {todos.map((task) => {
            return (
              <div key={task.id} className="flex justify-between">
                <input type="checkbox" />
                <div className="flex gap-2">
                  <p>{task.id}</p>
                  <h2>{task.taskName}</h2>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleDeleteTodo(task.id)}>
                    delete
                  </button>
                  <button>edit</button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p>No task data present!!!!</p>
      )}
    </div>
  );
};

export default TaskListArea;
