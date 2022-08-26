import axios from "axios";
const PARTICIPATOR_LOGIN_URL =
  "http://192.168.1.74:8085/doSignInForParticipator";
const CANDIDATE_REGISTRATION_URL = ` http://192.168.1.74:8085/candidateRegistration`;
const SHOW_ALL_LANGUAGE = `http://192.168.1.74:8085/showAllLanguage`;
const START_CONTEST_PAGE=`http://192.168.1.74:8085/startContestPage`;

const RUN_AND_CODE_COMPILER=`http://192.168.1.74:8085/`;

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
  return axios.post(`START_CONTEST_PAGE?contestId=${participatorData?.state?.data?.contestId}&language=${language}&studentId=${participatorData?.state?.data?.id}` ,
 );
};


const runAndCompilerCode=(CandidateCode)=>{
  return axios.post(`RUN_AND_CODE_COMPILER`,CandidateCode);
}
 export { participatorLogin, showAllLanguage,startContestPage,runAndCompilerCode};


 const sentMailForParticipator =()=>{

 }




