import axios from "axios";
import { BASE_URL } from "../base";
const SAVE_QUESTION = `${BASE_URL}/savequestion`;
// const question = {
//   questionId: "",
//   question: "search a word within a array and return the array with search data",
//   contestLevel: " Level 2@63086e46909f996340c97d7e",
//   questionStatus: "true",
//   sampleTestCase: [
//     {
//       constraints: "String != null...",
//       input: "Demo",
//       output: "m",
//     },
//   ],
//   testcases: [
//     {
//       id: "1",
//       input: "tree",
//       output: "e",
//     },
//     {
//       id: "2",
//       input: "joHn",
//       output: "H",
//     },
//   ],
// };
const saveQuestion = (question) => {
  return axios.post(SAVE_QUESTION, question);
};
export {
    saveQuestion
}
