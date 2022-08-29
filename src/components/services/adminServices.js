import axios from "axios";
const BASE_URL = `http://localhost:8085`;

const ADMIN_LOGIN_URL = `${BASE_URL}/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `${BASE_URL}/adminRegistration`;
const CREATE_CONTEST = `${BASE_URL}/createContest`;
const SEND_MAIL = `http://localhost:8085/admin/sendMail`;
const GET_ALL_CONTEST_LIST = `${BASE_URL}/getAllContestList`;
const CONTEST_URL = `${BASE_URL}/getContestDetail`;
const DELETE_CONTEST = `${BASE_URL}/deletecontest`;
const ADD_CONTEST = `${BASE_URL}/addContest`;
const UPLOAD_PARTICIAPTOR = `${BASE_URL}/studentUpload`;
const SENT_MAIL = `${BASE_URL}/admin/sentMailForParticipator`;

// const CONTEST_URL = `${BASE_URL}/getContestDetail`;
// const DELETE_CONTEST = `${BASE_URL}/deletecontest`;
// const ADD_CONTEST = `${BASE_URL}/addContest`;

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

const getContestDetail = (id) => {
  return axios.get(CONTEST_URL, {
    params: {
      contestId: id,
    },
  });
};
const deleteContest = (id) => {
  return axios.delete(DELETE_CONTEST, {
    params: {
      contestId: id,
    },
  });
};
const addContest = (contestDetails) => {
  return axios.post(CREATE_CONTEST, {
    contestName: contestDetails?.contestName,
    contestDescription: contestDetails?.contestDescription,
    contestLevel: contestDetails?.contestLevel,
    contestTime: contestDetails?.contestTime,
  });
};
const sendMail = (Id, mail) => {
  return axios.post(SEND_MAIL, {
    studentEmails: mail,
    contestId: [Id],
  });
};

const sentMail = () => {
  return axios.get(SENT_MAIL);
};
const uploadParticipator = (file) => {
  const formData = new FormData();
  formData.append("file", file)
  return axios.post(UPLOAD_PARTICIAPTOR,formData)
 
};

const getAllContestList = () => {
  return axios.get(GET_ALL_CONTEST_LIST);
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
