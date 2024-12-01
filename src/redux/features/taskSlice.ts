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
    // for adding new task to the list of todos
    addTodo: (state, action: PayloadAction<TodoTypes>) => {
      const isDuplicateId = state.some((task) => task.id === action.payload.id);
      if (!isDuplicateId) {
        state.push(action.payload);
      }
    },

    //deleting task from an array of object list
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

// Export the reducer functions as actions
export const { addTodo, deleteTodo } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
