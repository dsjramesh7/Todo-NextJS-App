"use client";
import { deleteTodo, toggleTodo } from "@/redux/features/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classNames from "classnames";
import { useSearchParams } from "next/navigation";

const TaskListArea = () => {
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const currentViewCategory = params.get("current");
  // console.log("currentViewCategory", currentViewCategory);

  const todos = useAppSelector((state) => state.todos);
  // console.log("todos", todos);

  // deleteTodo function
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  // toggleCheckbox for task
  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="px-4 flex-col">
      {todos && todos.length > 0 ? (
        <>
          {todos
            .filter((filteredTodo) => {
              if (
                currentViewCategory === "All" ||
                currentViewCategory === null
              ) {
                return filteredTodo;
              }
              if (currentViewCategory === "Completed") {
                return filteredTodo.completed;
              }
              if (currentViewCategory === "Remaining") {
                return !filteredTodo.completed;
              }
            })
            .map((task) => {
              return (
                <div
                  key={task.id}
                  className="flex justify-between items-center mt-2"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTodo(task.id)}
                    className="h-5 w-5"
                  />

                  <div
                    className={classNames(
                      "flex-grow mx-4 text-lg font-medium",
                      task.completed
                        ? "line-through text-gray-500"
                        : "text-black"
                    )}
                  >
                    {/* <p>{task.id}</p> */}
                    <h2>{task.taskName}</h2>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="danger"
                      color="danger"
                      onClick={() => handleDeleteTodo(task.id)}
                    >
                      delete
                    </Button>
                    <Modal id={task.id} />
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
