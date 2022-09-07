import axios from "axios";
import { BASE_URL } from "./base";
import candidateApi from "./candidateApi";
const PARTICIPATOR_LOGIN_URL =`${BASE_URL}/public/doSignInForParticipator`;
const SHOW_ALL_LANGUAGE = `${BASE_URL}/showAllLanguage`;
const START_CONTEST_PAGE=`${ BASE_URL}/startContestPage`;
const RUN_AND_CODE_COMPILER=`${BASE_URL}/runAndCompilerCode`;

const participatorLogin = (contestId, credential) => {
  console.log('-----',contestId)
  return axios.get(PARTICIPATOR_LOGIN_URL, {
    params: {
      contestId: contestId,
      email: credential?.email,
      password: credential?.password,
    },
  });
};
const showAllLanguage = () => {
  return candidateApi.get(SHOW_ALL_LANGUAGE);
};

const startContestPage = (language,participatorData) => {
  return candidateApi.post(`${START_CONTEST_PAGE}?contestId=${participatorData?.state?.data?.student?.contestId}&language=${language}&studentId=${participatorData?.state?.data?.student?.id}` ,
 );
};


const runAndCompilerCode=(candidateCode)=>{
  return  candidateApi.post(`${RUN_AND_CODE_COMPILER}`,candidateCode);
}


 export {participatorLogin, showAllLanguage,startContestPage,runAndCompilerCode};



 



