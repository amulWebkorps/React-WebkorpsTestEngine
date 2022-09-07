import axios from "axios";
import { BASE_URL } from "../base";


const SAVE_QUESTION = `${BASE_URL}/savequestion`;
const FILER_QUESTION = `${BASE_URL}/filterquestion`;
const DELETE_QUESTION = `${BASE_URL}/deletequestion`;
const ADD_SELECTIVE_QUE=`${BASE_URL}/addselectedavailablequestiontocontest`
const saveQuestion = (question) => {
  return axios.post(SAVE_QUESTION, question);
};

const filterQuestion = (level) => {
  return axios.get(FILER_QUESTION, {
    params: {
      filterByString: level,
    },
  });
};

const addSelectiveQuestion=(quesArray)=>{
  return axios.post(ADD_SELECTIVE_QUE,quesArray);
}

const deleteQuestion = (quesArray) => {
  console.log("---array", quesArray);
   return axios.delete(DELETE_QUESTION, {data:quesArray});
};
export { saveQuestion, filterQuestion, deleteQuestion,addSelectiveQuestion };
