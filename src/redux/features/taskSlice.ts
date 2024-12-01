import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the TodoTypes interface
interface TodoTypes {
  id: string;
  taskName: string;
  completed: boolean;
}

// Initial state
const initialState: TodoTypes[] = [];

// Create the task slice
const taskSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //reducer or function for adding new task to the list of todos
    addTodo: (state, action: PayloadAction<TodoTypes>) => {
      const isDuplicateId = state.some((task) => task.id === action.payload.id);
      if (!isDuplicateId) {
        state.push(action.payload);
      }
    },

    //reducer or function for deleting task from an array of object list
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },

    //reducer or function to edit the task in todos
    editTodo: (
      state,
      action: PayloadAction<{ id: string; taskName: string }>
    ) => {
      const { id, taskName } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state[taskIndex].taskName = taskName;
      }
    },
  },
});

// Export the reducer functions as actions
export const { addTodo, deleteTodo, editTodo } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
