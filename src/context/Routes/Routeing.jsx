import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateUser from "../../components/CreateUser/CreateUser";
import Home from "../../components/Home";
import Login from "../../components/Login/Login";
import Nav from "../../components/Nav";
import NotFound from "../../components/NotFound/NotFound";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import Register from "../../Register/Register";

const Routing = () => {
  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createaccount" element={<CreateUser />}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
      <ThemeButton />
    </>
  );
};

export default Routing;
