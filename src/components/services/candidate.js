import axios from "axios";
import { BASE_URL } from "./base";
import candidateApi from "./candidateApi";
const PARTICIPATOR_LOGIN_URL = `${BASE_URL}/public/doSignInForParticipator`;
const SHOW_ALL_LANGUAGE = `${BASE_URL}/showAllLanguage`;
const START_CONTEST_PAGE = `${BASE_URL}/startContestPage`;
const RUN_AND_CODE_COMPILER = `${BASE_URL}/runAndCompilerCode`;

<<<<<<< HEAD
export const CANDIDATE_LANGUAGE_URL=`http://192.168.1.93:8085/showAllLanguage`
const candidateLogin=()=>{
    return axios.post(CANDIDATE_LOGIN_URL)
}
const candidateRegistration=()=>{
    return axios.post(candidateRegistration)
=======
const participatorLogin = (contestId, credential) => {
  const cred = {
    email: credential?.email,
    password: credential?.password,
  };
  return axios.post(PARTICIPATOR_LOGIN_URL, cred, {
    params: { contestId: contestId },
  });
};
const showAllLanguage = () => {
  return candidateApi.get(SHOW_ALL_LANGUAGE);
};

const startContestPage = (language) => {
  return candidateApi.post(
    `${START_CONTEST_PAGE}?contestId=${localStorage.getItem(
      "contestId"
    )}&language=${language}&studentId=${localStorage.getItem("studentId")}`
  );
};

const runAndCompilerCode = (candidateCode) => {
  return candidateApi.post(`${RUN_AND_CODE_COMPILER}`, candidateCode);
};

const submitCode = (candidateCode) => {
  return candidateApi.post(`${RUN_AND_CODE_COMPILER}`, candidateCode);
};
const finish=(candidateCode)=>{
  return candidateApi.post(`${RUN_AND_CODE_COMPILER}`, candidateCode);
>>>>>>> newCompiler
}

export {
  participatorLogin,
  showAllLanguage,
  startContestPage,
  runAndCompilerCode,
  submitCode,
  finish
};
