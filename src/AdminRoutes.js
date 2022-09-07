import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const path = window?.location?.pathname;
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (path === "/dashboard" && token) {
      navigate("/dashboard");
    } else if (path === "/addQuestion" && token) {
      navigate("/addQuestion");
    } else if (path === "/email" && token) {
      navigate("/email");
    } else if (path === "/participator" && token) {
      navigate("/participator");
    } else if (path === "/all" && token) {
      navigate("/all");
    } else if (path === "/allavailable" && token) {
      navigate("/allavailable");
    } else {
      localStorage.clear();
      navigate("/");
    }
  }, []);
  return (
    <>
      <Component />
    </>
  );
};

export default AdminRoutes;
