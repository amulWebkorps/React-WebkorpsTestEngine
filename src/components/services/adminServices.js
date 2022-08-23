import axios from "axios";
const ADMIN_LOGIN_URL = `http://localhost:8085/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `http://localhost:8085/adminRegistration`;
const CREATE_CONTEST = `http://localhost:8085/createContest`;
const SEND_MAIL = `http://localhost:8085/sendMail`;
const CONTEST_URL=`http://localhost:8085/getContestDetail`
const ADD_CONTEST = `http://localhost:8085/addContest`;
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

const getContestDetail=(id)=>{
  return axios.get(CONTEST_URL,{
    params:{
      contestId:id
    }
  })
}

const addContest = (contestDetails) => {
  return axios.post(CREATE_CONTEST, {
    contestName: contestDetails?.contestName,
    contestDescription: contestDetails?.contestDescription,
    contestLevel: contestDetails?.contestLevel,
  });
};
const sendMail = (contestId,mailAddress) => {
  return axios.post(SEND_MAIL,{
    
  });
};

export { loginAdmin, registerAdmin, sendMail, addContest, getContestDetail };
