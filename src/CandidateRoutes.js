import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const path = window?.location?.pathname;

const CandidateRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    // let token = localStorage.getItem("token");
    // if (token == null) {
    //   navigate("/login/:id");
    // }
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login/:id");
    }
  }, []);
  return (
    <>
      <Component />
    </>
  );
};

export default CandidateRoutes;
