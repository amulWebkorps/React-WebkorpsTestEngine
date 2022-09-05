import axios from "axios";
const PARTICIPATOR_LOGIN_URL ="http://192.168.1.63:8085/doSignInForParticipator";
const SHOW_ALL_LANGUAGE = `http://192.168.1.63:8085/showAllLanguage`;
const START_CONTEST_PAGE=`http://192.168.1.63:8085/startContestPage`;
const RUN_AND_CODE_COMPILER=`http://192.168.1.63:8085/runAndCompilerCode`;
const participatorLogin = (contestId, credential) => {
  return axios.get(PARTICIPATOR_LOGIN_URL, {
    params: {
      contestId: contestId,
      email: credential?.email,
      password: credential?.password,
    },
  });
};
const showAllLanguage = () => {
  return axios.get(SHOW_ALL_LANGUAGE);
};

const startContestPage = (language,participatorData) => {
  return axios.post(`${START_CONTEST_PAGE}?contestId=${participatorData?.state?.data?.contestId}&language=${language}&studentId=${participatorData?.state?.data?.id}` ,
 );
};


const runAndCompilerCode=(candidateCode)=>{
  return axios.post(`${RUN_AND_CODE_COMPILER}`,candidateCode);
}


 export { participatorLogin, showAllLanguage,startContestPage,runAndCompilerCode};



 



