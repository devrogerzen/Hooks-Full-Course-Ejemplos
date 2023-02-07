import { useForm } from "../hooks/useForm"

export const TodoAdd = () => {

  const { desciption, onInputChange, onResetForm} = useForm({
    desciption: ''
  })


  return (



    <form onSubmit={handleNewTodo}>
      <input type="text" placeholder="Que hay que hacer"
      name="description" 
      value={desciption}
      onChange={onInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
