import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //propiedades computadas de los objetos colocando entre corchetes digo la propiedad
      // que voy a integrar al objeto y : luego el valor que voy a integrarle
    });
  };

  const onResetForm = ( ) => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
