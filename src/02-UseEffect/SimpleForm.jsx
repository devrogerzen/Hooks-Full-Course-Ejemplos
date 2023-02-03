import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "devrogerzen@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, //propiedades computadas de los objetos colocando entre corchetes digo la propiedad
      // que voy a integrar al objeto y : luego el valor que voy a integrarle
    });
  };

  useEffect(() => {
    //console.log("useEffect Called");
  }, []);

  useEffect(() => {
    //console.log("formState Called");
  }, [formState]);

  useEffect(() => {
    //console.log("email Called");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <br />
      <input
        type="email"
        placeholder="devrogerzen@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
{
  (username === "strider2") && <Message />
}
      
    </>
  );
};
