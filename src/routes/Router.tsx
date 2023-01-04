import { Route, Routes } from "react-router-dom";
import { Detail } from "../pages/Detail";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Todos } from "../pages/Todos";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/todos/:id" element={<Detail />} />
    </Routes>
  );
};
