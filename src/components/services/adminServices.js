import axios from "axios";
const ADMIN_LOGIN_URL = `http://192.168.1.74:8085/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `http://192.168.1.74:8085/adminRegistration`;
const CREATE_CONTEST = `http://192.168.1.74:8085/createContest`;
const SEND_MAIL = `http://192.168.1.74:8085/sendMail`;
const ADD_CONTEST = `http://192.168.1.74:8085/addContest`;
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

const addContest = (contestDetails) => {
  // axios.post(`http://localhost:8085/createContest`, {
  //       "contestName": "fresher",
  //       "contestDescription":"for 1 to 2 year experience",
  //      "contestLevel": "Level 2"
  //   })
  return axios.post(CREATE_CONTEST, {
    contestName: contestDetails?.contestName,
    contestDescription: contestDetails?.contestDescription,
    contestLevel: contestDetails?.contestLevel,
  });
};
const sendMail = (mailAddress) => {
  return axios.post(SEND_MAIL);
};

export { loginAdmin, registerAdmin, sendMail, addContest };
