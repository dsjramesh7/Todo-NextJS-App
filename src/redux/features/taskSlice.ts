import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Defining the TodoTypes interface
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
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state[taskIndex].taskName = action.payload.taskName;
      }
    },

    //reducer or function for toggle of task complete or not
    toggleTodo: (state, action: PayloadAction<string>) => {
      const task = state.find((task) => task.id === action.payload);
      // console.log("id:", task?.completed);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

// Export the reducer functions as actions
export const { addTodo, deleteTodo, editTodo, toggleTodo } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
