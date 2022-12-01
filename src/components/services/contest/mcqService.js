import { BASE_URL } from "../base";
import api from "../api";

const UPLOAD_MCQ = `${BASE_URL}/admin/mcqUpload`;
const DELETE_MCQ = `${BASE_URL}/admin/deleteMcqQuestion`;
const ADD_SELECTIVE_MCQ = `${BASE_URL}/admin/addSelectedAvailableMCQtoContest`;
const GET_CONTEST_PARTICIPATOR = `${BASE_URL}/admin/participatorOfMCQContest`;
const ALL_MCQ = `${BASE_URL}/admin/getAllMcq`;
const DELETE_All_MCQ = `${BASE_URL}/admin/deleteMcq`;
const uploadMcqs = (file, id) => {
  console.log("form datqa", id);
  const formData = new FormData();
  formData.append("contestId", id);
  formData.append("file", file);
  return api.post(UPLOAD_MCQ, formData);
};
const deleteMcq = (mcqArray) => {
  return api.put(DELETE_MCQ, mcqArray);
};
const addSelectiveMcq = (mcqArray) => {
  return api.post(ADD_SELECTIVE_MCQ, mcqArray);
};
const getParticipatorOfContest = (id) => {
  // return api.get(`${GET_CONTEST_PARTICIPATOR}${id}`)
  return api.get(`${GET_CONTEST_PARTICIPATOR}?contestId=${id}`);
};
const getAllMcq = () => {
  return api.get(ALL_MCQ);
};
const deleteAllMcq = (quesId) => {
  return api.delete(`${DELETE_All_MCQ}?mcqId=${quesId}`);
};

export {
  uploadMcqs,
  deleteMcq,
  addSelectiveMcq,
  getParticipatorOfContest,
  getAllMcq,
  deleteAllMcq,
};
