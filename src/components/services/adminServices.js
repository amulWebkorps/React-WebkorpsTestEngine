import axios from "axios";
const ADMIN_LOGIN_URL = `http:8080/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `http:8080/doSignInForAdmin`;
const SEND_MAIL = `http:8080/sendMail`;
const ADD_CONTEST=`http:8080/addContest`
const loginAdmin = (credential) => {
  return axios.post(ADMIN_LOGIN_URL);
};
const registerAdmin = (credential) => {
  return axios.post(ADMIN_REGISTRATION_URL);
};
const sendMail = (mailAddress) => {
  return axios.post(SEND_MAIL);
};

const addContest = (contestDetails) => {
  return axios.post(
    ADD_CONTEST,
    contestDetails,
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
};

export { loginAdmin, registerAdmin, sendMail,addContest };
