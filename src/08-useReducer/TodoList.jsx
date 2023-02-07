import { TodoItems } from "./TodoItems";

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItems key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
