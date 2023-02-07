import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del Poder",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = () => {
    console.log();
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />
      <div>
        <div>
          <TodoList todos={todos} />
        </div>

        <div>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd />
        </div>
      </div>
    </>
  );
};
