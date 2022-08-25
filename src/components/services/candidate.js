import axios from "axios";
const PARTICIPATOR_LOGIN_URL =
  "http://192.168.1.115:8085/doSignInForParticipator";
const CANDIDATE_REGISTRATION_URL = ` http://192.168.1.115:8085/candidateRegistration`;
const SHOW_ALL_LANGUAGE = `http://192.168.1.115:8085/showAllLanguage`;
const START_CONTEST_PAGE=`http://192.168.1.115:8085/startContestPage`

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
  return axios.post(`http://192.168.1.115:8085/startContestPage?contestId=${participatorData?.state?.data?.contestId}&language=${language}&studentId=${participatorData?.state?.data?.id}` ,
 );
};
export { participatorLogin, showAllLanguage,startContestPage};


 const sentMailForParticipator =()=>{


 }

