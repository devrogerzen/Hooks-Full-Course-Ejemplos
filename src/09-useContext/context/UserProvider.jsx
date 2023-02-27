import { useState } from "react";
import { UserContext } from "./UserContext";


/* const user = {
  id:123,
  name: "Roger",
  email: "roger@gmail.com"

} */


export const UserProvider = ({ children }) => {

const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{ hola: "Mundo", user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
