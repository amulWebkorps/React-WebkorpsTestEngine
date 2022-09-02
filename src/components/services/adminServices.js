import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import api from "./token";
const BASE_URL = `http://localhost:8085`;

const ADMIN_LOGIN_URL = `${BASE_URL}/public/admin/signIn`;
const ADMIN_REGISTRATION_URL = `${BASE_URL}/public/adminRegistration`;
const CREATE_CONTEST = `${BASE_URL}/admin/createContest`;
const SEND_MAIL = `http://localhost:8085/admin/sendMail`;
const GET_ALL_CONTEST_LIST = `${BASE_URL}/admin/getAllContestList`;
const CONTEST_URL = `${BASE_URL}/admin/getContestDetail`;
const DELETE_CONTEST = `${BASE_URL}/admin/deleteContest`;
const ADD_CONTEST = `${BASE_URL}/addContest`;
const UPLOAD_PARTICIAPTOR = `${BASE_URL}/studentUpload`;
const SENT_MAIL = `${BASE_URL}/admin/sentMailForParticipator`;

// const CONTEST_URL = `${BASE_URL}/getContestDetail`;
// const DELETE_CONTEST = `${BASE_URL}/deletecontest`;
// const ADD_CONTEST = `${BASE_URL}/addContest`;

// const token = localStorage.getItem("token");
// useEffect(() => {
//   setTimeout(() => console.log("token", token), 2000);
// }, [token]);

//const token = localStorage.getItem("token");
//console.log(token, "---TOKEN----");
const loginAdmin = (credential) => {
  return axios.get(
    ADMIN_LOGIN_URL,
    {
      params: {
        email: credential?.email,
        password: credential?.password,
      },
    }
    // (axios.defaults.headers.common["Authorization"] =
    //   localStorage.getItem("token"))
  );
};
const registerAdmin = (credential) => {
  return axios.post(ADMIN_REGISTRATION_URL, {
    email: credential?.email,
    hId: "string",
    hName: credential?.hName,
    hNumber: credential?.hNumber,
    password: credential?.password,
  });
};

const getContestDetail = (id) => {
  return api.get(
    CONTEST_URL,
    {
      params: {
        contestId: id,
      },
      // headers: {
      //   Authorization: localStorage.getItem("token"),
      // },
    }
    // (axios.defaults.headers.common["Authorization"] =
    //   localStorage.getItem("token"))
  );
};
const deleteContest = (id) => {
  return api.delete(
    DELETE_CONTEST,
    {
      params: {
        contestId: id,
      },
    }
    // (axios.defaults.headers.common["Authorization"] =
    //   localStorage.getItem("token"))
  );
};

const addContest = (contestDetails) => {
  return api.post(
    CREATE_CONTEST,
    {
      contestName: contestDetails?.contestName,
      contestDescription: contestDetails?.contestDescription,
      contestLevel: contestDetails?.contestLevel,
      contestTime: contestDetails?.contestTime,
    }
    // (axios.defaults.headers.common["Authorization"] =
    //   localStorage.getItem("token"))
  );
};
const sendMail = (Id, mail) => {
  return axios.post(SEND_MAIL, {
    studentEmails: [mail],
    contestId: [Id],
  });
};

const sentMail = () => {
  return axios.get(SENT_MAIL);
};
const uploadParticipator = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(UPLOAD_PARTICIAPTOR, formData);
  // return axios({
  //   method: "post",
  //   url: `${UPLOAD_PARTICIAPTOR}`,
  //   file: file,
  //   headers: {
  //     "Content-Type":
  //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   },
  // });
};

const getAllContestList = () => {
  return api.get(
    GET_ALL_CONTEST_LIST
    //  {headers : {
    //     Authorization: localStorage.getItem("token"),
    //     "Access-Control-Allow-Origin": "*",
    //   }},
    // (axios.defaults.headers.common["Authorization"] =
    //   localStorage.getItem("token"))
  );
};

const adminServices = () => {
  return <></>;
};

export default BASE_URL;
export {
  loginAdmin,
  registerAdmin,
  sendMail,
  addContest,
  getContestDetail,
  getAllContestList,
  deleteContest,
  sentMail,
  uploadParticipator,
};
