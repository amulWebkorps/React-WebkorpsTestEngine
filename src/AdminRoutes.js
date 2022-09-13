import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRoutes = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const path = window?.location?.pathname;

  useEffect(() => {
    // if (path === "/dashboard") {
    //   // window.history.forward();
    //   //   setTimeout(()=>{
    //   //   window.location.reload();
    //   // },0)
    //   //  setTimeout(()=>{
    //   //   window.location.reload(false);
    //   // },0)
    //   // //window.location.reload();
    //   // navigate("/dashboard");
    //   // window.location.reload(false);
    // }
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("token");
    // if (path === "/dashboard" && token) {
    //   //   setTimeout(()=>{
    //   //     window.location.reload();
    //   //   },5000)
    //   navigate("/dashboard");
    // } else if (path === "/addQuestion" && token) {
    //   navigate("/addQuestion");
    // } else if (path === "/email" && token) {
    //   navigate("/email");
    // } else if (path === "/participator" && token) {
    //   navigate("/participator");
    // } else if (path === "/all" && token) {
    //   navigate("/all");
    // } else if (path === "/allavailable" && token) {
    //   navigate("/allavailable");
    if (token == null) {
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
