import React from "react";

export const TodoItems = ({ todo }) => {
  return (
    <li>
      <span>{todo.description}</span>
      <button>Borrar</button>
    </li>
  );
};
