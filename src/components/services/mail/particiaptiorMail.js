import axios from "axios";
import { BASE_URL } from "../base";
import api from "../api";
const SEARCH_MAIL = "";
const DELETE_STUDENT = `${BASE_URL}/admin/deleteStudent`;
const GET_ALL_PARTICIPANTS = `${BASE_URL}/admin/getAllParticipator`;
const FILTER_PARTICIPANTS=`${BASE_URL}/admin/filterParticipants?filterByString=`
const deletestudent = (mailId) => {
  return api.delete(`${DELETE_STUDENT}?emailId=${mailId}`);
};
const getParticipator = () => {
  return api.get(GET_ALL_PARTICIPANTS);
};

const filterParticipator=(filterValue)=>{
  return api.get(`${FILTER_PARTICIPANTS}${filterValue}`)
}

export { deletestudent, getParticipator,filterParticipator };
