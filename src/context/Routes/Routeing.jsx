import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateUser from "../../components/CreateUser/CreateUser";
import Home from "../../components/Home";
import Login from "../../components/Login/Login";
import Logout from "../../components/Logout/Logout";
import Nav from "../../components/Nav";
import NotFound from "../../components/NotFound/NotFound";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

const Routing = () => {

  const navigate= useNavigate()

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login navigate={navigate}/>} />
        <Route path="/createaccount" element={<CreateUser />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ThemeButton />
    </>
  );
};

export default Routing;
