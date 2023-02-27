import { Navigate, Route, Routes } from "react-router-dom";
import { AbautPage } from "./AbautPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AbautPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
