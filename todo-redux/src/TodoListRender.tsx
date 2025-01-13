import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "./Features/TodoSlice";
import { myRootState } from "./Features/MainStore";
import Logo from "./assets/react.svg";
function TodoListRender() {
  const [done, setDone] = useState(true);
  const myTodoSelectors = useSelector(
    (state: myRootState) => state.todo.todoItems,
  );
  const removeDispatch = useDispatch();

  const handleDoneTodo = () => {
    setDone(!done);
  };
  const handleRemoveTodo = (id) => {
    removeDispatch(removeToDo(id));
  };

  if (myTodoSelectors.length === 0) {
    return (
      <div className="tdlist-nolist">
        <img src={Logo} alt="No Tasks" />
        <h1>No Tasks Added...</h1>
      </div>
    );
  }
  return (
    <div className="tdlist">
      <div className="tdlist-container">
        <h1>List Itself</h1>
        <ul>
          {myTodoSelectors.map((todo) => (
            <li key={todo.id} className={done ? "done" : "undone"}>
              <p>{todo.todoTitle}</p>
              <div className="tdlist-buttons">
                <button onClick={handleDoneTodo} id="done-btn">
                  Done
                </button>
                <button onClick={() => handleRemoveTodo(todo.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListRender;
/*  {myTodoSelectors.map((todo) => (
              <li key={todo.id} className={done ? "done" : "undone"}>
                <p>{todo.todo}</p>
                <div className="tdlist-buttons">
                  <button onClick={handleDoneTodo} id="done-btn">
                    Done
                  </button>
                  <button onClick={() => handleRemoveTodo(todo.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}*/
