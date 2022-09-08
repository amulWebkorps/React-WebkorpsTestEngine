import { BASE_URL } from "../base";
import api from "../api";
const SAVE_QUESTION = `${BASE_URL}/admin/saveQuestion`;
const FILER_QUESTION = `${BASE_URL}/admin/filterQuestion`;
const DELETE_QUESTION = `${BASE_URL}/admin/deleteQuestion`;
const UPLOAD_QUESTION=`${BASE_URL}/admin/questionUpload`
const ADD_SELECTIVE_QUE = `${BASE_URL}/admin/addSelectedAvailableQuestiontoContest`;
const GET_CONTEST_PARTICIPATOR=`${BASE_URL}/admin/participatorOfContest?contestId=`
const DELETE_STUDENT=`${BASE_URL}/admin/deleteStudent?emailId=`
const saveQuestion = (question) => {
  return api.post(SAVE_QUESTION, question);
};

const filterQuestion = (level) => {
  return api.get(FILER_QUESTION, {
    params: {
      filterByString: level,
    },
  });
};

const addSelectiveQuestion = (quesArray) => {
  console.log('wusqrr',quesArray)
  return api.post(ADD_SELECTIVE_QUE, quesArray);
};

const deleteQuestion = (quesArray) => {
  console.log("---array", quesArray);
  return api.delete(DELETE_QUESTION, { data: quesArray });
};

const getParticipatorOfContest=(id)=>{
 return api.get(`${GET_CONTEST_PARTICIPATOR}${id}`)
}

const deleteStudent=(emailId)=>{
  return api.delete(`${DELETE_STUDENT}${emailId}`)
}
const uploadQuestions=(file,id)=>{
  const formData = new FormData();
   formData.append("contestId",id)
   formData.append("file",file)
  return api.post(UPLOAD_QUESTION,formData);
}
export { saveQuestion, filterQuestion, deleteQuestion, addSelectiveQuestion, uploadQuestions,getParticipatorOfContest,deleteStudent };
