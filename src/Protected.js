import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    
  const { Component,admin } = props;
  console.log(admin);
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/");
    }
  },[]);
  return (
    <>
      <Component
      admin={admin}
       />
    </>
  );
};

export default Protected;
