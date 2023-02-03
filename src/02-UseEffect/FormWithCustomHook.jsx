import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { /* formState, */ onInputChange, onResetForm, username, email, password } = useForm(
    {
      username: "",
      email: "",
      password: "",
    }
  );

  //const { username, email, password } = formState;

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

      <br />
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}>Reset</button>
    </>
  );
};
