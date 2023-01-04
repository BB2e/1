import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <Link to="/">Main</Link>&nbsp;&nbsp;
      <Link to="/login">Login</Link>&nbsp;&nbsp;
      <Link to="/todos">List</Link>
    </>
  );
};
