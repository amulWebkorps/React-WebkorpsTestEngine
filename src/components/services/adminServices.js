import axios from "axios";
const ADMIN_LOGIN_URL = `http://192.168.1.115:8085/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `http://192.168.1.115:8085/adminRegistration`;
const CREATE_CONTEST = `http://192.168.1.115:8085/createContest`;
const SEND_MAIL = `http://192.168.1.115:8085/sendMail`;
const ADD_CONTEST = `http://192.168.1.115:8085/addContest`;
const CONTEST_URL='`http://192.168.1.115:8085/getContestDetail;'

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
const sendMail = (mailAddress) => {
  return axios.post(SEND_MAIL);
};

export { loginAdmin, registerAdmin, sendMail, addContest,getContestDetail};

// export { loginAdmin, registerAdmin, sendMail, addContest};
