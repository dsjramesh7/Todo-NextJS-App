"use client";
import { Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import Button from "../Button";
import { useAppDispatch } from "@/redux/store";
import { editTodo } from "@/redux/features/taskSlice";

const Modal = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [editInputValue, setEditInputValue] = useState("");
  const handleEditTodo = (todoId: string) => {
    if (editInputValue.trim() === "") return;
    dispatch(
      editTodo({
        id: todoId,
        taskName: editInputValue,
      })
    );
    setEditInputValue("");
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="primary" color="primary">
          Edit
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit Task</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your Task Name.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text>Name</Text>
            <TextField.Root
              onChange={(e) => setEditInputValue(e.target.value)}
              // defaultValue="Watch DeathNote"
              value={editInputValue}
              placeholder="Enter your Task here......."
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="outline">Cancel</Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              variant="primary"
              color="primary"
              onClick={() => handleEditTodo(id)}
            >
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Modal;
