"use client";
import { addTodo } from "@/redux/features/taskSlice";
import { useAppDispatch } from "@/redux/store";
import React, { useState } from "react";

const AddTodoComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  // random number function
  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 10000);
  };

  const handleAddTodo = () => {
    // if input is empty it will not add in the list
    if (inputValue.trim() === "") return;

    // adds new task to the list
    dispatch(
      addTodo({
        id: String(randomNumberGenerator()),
        taskName: inputValue,
        completed: false,
      })
    );

    //clear the input box
    setInputValue("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo();
      }}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-green-500 w-4/5 p-3"
      />
      <div
        onClick={handleAddTodo}
        className="py-2 px-4 border border-blue-500 cursor-pointer"
      >
        Add
      </div>
    </form>
  );
};

export default AddTodoComponent;
