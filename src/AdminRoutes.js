import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRoutes = (props) => {
  const { Component,SetRegisterCredential } = props;
  const navigate = useNavigate();
  const path = window?.location?.pathname;

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token == null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Component SetRegisterCredential={SetRegisterCredential} />
    </>
  );
};

export default AdminRoutes;
