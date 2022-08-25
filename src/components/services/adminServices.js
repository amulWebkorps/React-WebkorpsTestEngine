import axios from "axios";
const BASE_URL=`http://192.168.1.115:8085`
const ADMIN_LOGIN_URL = `${BASE_URL}/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `${BASE_URL}/adminRegistration`;
const CREATE_CONTEST = `${BASE_URL}/createContest`;
const SEND_MAIL = `${BASE_URL}/sendMail`;
const CONTEST_URL=`${BASE_URL}/getContestDetail`
const ADD_CONTEST = `${BASE_URL}/addContest`;
const GET_ALL_CONTEST_LIST = `${BASE_URL}/getAllContestList`;


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



const getAllContestList =()=>{
  return axios.get(GET_ALL_CONTEST_LIST)
}



export { loginAdmin, registerAdmin, sendMail, addContest, getContestDetail,getAllContestList};
