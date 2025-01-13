import { useState } from "react";
import TodoListRender from "./TodoListRender";
import { useDispatch } from "react-redux";
import { addToDo } from "./Features/TodoSlice";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const myAddDispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo) {
      myAddDispatch(addToDo(todo));
      setTodo("");
    }
  };

  return (
    <div className="todo">
      <div className="todo-container">
        <h1>Todo Input</h1>
        <div className="todo-inputs">
          <input
            type="text"
            placeholder="Add Task!"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>

        <TodoListRender />
      </div>
    </div>
  );
}

export default TodoInput;
