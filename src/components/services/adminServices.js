import axios from "axios";
import { BASE_URL } from "./base";
import api from "./api";
//const BASE_URL = `http://localhost:8085`;
const ADMIN_LOGIN_URL = `${BASE_URL}/public/admin/signIn`;
const ADMIN_REGISTRATION_URL = `${BASE_URL}/public/adminRegistration`;
const CREATE_CONTEST = `${BASE_URL}/admin/createContest`;
const SEND_MAIL = `${BASE_URL}/admin/sendMail`;
const GET_ALL_CONTEST_LIST = `${BASE_URL}/admin/getAllContestList`;
const CONTEST_URL = `${BASE_URL}/admin/getContestDetail`;
const DELETE_CONTEST = `${BASE_URL}/admin/deleteContest`;
const UPLOAD_PARTICIAPTOR = `${BASE_URL}/admin/studentUpload`;
const SENT_MAIL = `${BASE_URL}/admin/sentMailForParticipator`;
const loginAdmin = (credential) => {

  return axios.post(ADMIN_LOGIN_URL,credential);

//   return axios.post(ADMIN_LOGIN_URL, credential);
// >>>>>>> dc51dd10e82606d221a262dd7ec88868bc3b4dcb
};
const registerAdmin = (credential) => {
  return axios.post(ADMIN_REGISTRATION_URL, {
    email: credential?.email,
    hId: "",
    hName: credential?.hName,
    hNumber: credential?.hNumber,
    password: credential?.password,
  });
};

const getContestDetail = (id) => {
  return api.get(`${CONTEST_URL}?contestId=${id}`);
};

const deleteContest = (id) => {
  return api.delete(`${DELETE_CONTEST}?contestId=${id}`);
};

const addContest = (contestDetails) => {
  return api.post(CREATE_CONTEST,contestDetails);
};
const sendMail = (Id, mail) => {
  return api.post(SEND_MAIL, {
    studentEmails: mail,
    contestId: [Id],
  });
};

const sentMail = () => {
  return api.get(SENT_MAIL);
};
const uploadParticipator = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return api.post(UPLOAD_PARTICIAPTOR, formData);
};

const getAllContestList = () => {
  return api.get(GET_ALL_CONTEST_LIST);
};

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

// export { loginAdmin, registerAdmin, sendMail, addContest, getContestDetail,getAllContestList,deleteContest,getparticipatordetail,viewParticipatorOfContest};