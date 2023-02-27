import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <NavLink
        className={ ({ isActive }) => `${ isActive ? "navlink" : ""}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={ ({ isActive }) => `${ isActive ? "navlink" : ""}`}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={ ({ isActive }) => `${ isActive ? "navlink" : ""}`}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};
