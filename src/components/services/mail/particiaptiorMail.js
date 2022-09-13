import axios from "axios";
import { BASE_URL } from "../base";
import api from "../api";
const SEARCH_MAIL = "";
const DELETE_STUDENT = `${BASE_URL}/admin/deleteStudent`;
const GET_ALL_PARTICIPATOR = `${BASE_URL}/admin/getAllParticipator`;
const deletestudent = (mailId) => {
  return api.delete(`${DELETE_STUDENT}?emailId=${mailId}`);
};
const getParticipator = () => {
  return api.get(GET_ALL_PARTICIPATOR);
};

export { deletestudent, getParticipator };
