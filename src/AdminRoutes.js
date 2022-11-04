import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRoutes = (props) => {
  const { Component,setRegisterCredential } = props;
  const navigate = useNavigate();
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token == null) {
      navigate("/");
    } 
  }, []);

  return (
    <>
      <Component setRegisterCredential={setRegisterCredential} />
    </>
  );
};

export default AdminRoutes;
