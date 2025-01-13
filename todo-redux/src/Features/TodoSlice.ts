import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoList {
  id: number;
  todoTitle: string;
}

interface TodoState {
  todoItems: TodoList[];
  nextId: number;
}

const initialState: TodoState = {
  todoItems: [],
  nextId: 1,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      // Accept string payload
      const newTodo: TodoList = {
        id: state.nextId,
        todoTitle: action.payload, // Use payload directly
      };
      state.todoItems.push(newTodo);
      state.nextId++; // Increment nextId
    },
    removeToDo: (state, action: PayloadAction<number>) => {
      state.todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload,
      );
    },
  },
});

export const { addToDo, removeToDo } = todoSlice.actions;
export default todoSlice.reducer;
