import axios from "axios";
const ADMIN_LOGIN_URL = `http://localhost:8085/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `http://localhost:8085/adminRegistration`;
const SEND_MAIL = `http:8080/sendMail`;
const ADD_CONTEST = `http:8080/addContest`;
const loginAdmin = (credential) => {
  return axios.get(ADMIN_LOGIN_URL, {
    params: {
      email: credential?.email,
      password: credential?.password,
    },
  });
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
const sendMail = (mailAddress) => {
  return axios.post(SEND_MAIL);
};

const addContest = (contestDetails) => {
  return axios.post(ADD_CONTEST, contestDetails, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};

export { loginAdmin, registerAdmin, sendMail, addContest };
