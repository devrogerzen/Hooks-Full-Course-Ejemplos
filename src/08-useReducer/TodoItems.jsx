import React from "react";

export const TodoItems = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li>
      <span className={`${todo.done && "done-toggle"}`} onClick={() => onToggleTodo(todo.id)}>
        {todo.description}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
    </li>
  );
};
