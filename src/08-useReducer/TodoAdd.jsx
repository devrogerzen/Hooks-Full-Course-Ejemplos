import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    desciption: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      donde: false,
    };

    onNewTodo(newTodo);

    onResetForm()
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
