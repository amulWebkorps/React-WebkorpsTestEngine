import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const path = window?.location?.pathname;

const Protected = (props) => {
  const { Component, admin } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if ((path === "/dashboard" && token) || path === "/dashboard") {
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
      <Component admin={admin} />
    </>
  );
};

export default Protected;
