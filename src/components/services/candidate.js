import axios from "axios";
const PARTICIPATOR_LOGIN_URL =
  "http://localhost:8085/doSignInForParticipator";
const CANDIDATE_REGISTRATION_URL = ` http:8080/candidateRegistration`;
const SHOW_ALL_LANGUAGE = `http://localhost:8085/showAllLanguage`;
const START_CONTEST_PAGE=`http://localhost:8085/startContestPage`

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
  return axios.get(SHOW_ALL_LANGUAGE);
};

const startContestPage = () => {
  return axios.post(START_CONTEST_PAGE,{
    params: {
      contestId: "62f1123c197f857ee1f940e0",
      language: "java",
      studentId: "2910e8d7-ef82-43f8-8b2b-f5e211ba98e2",
    }, 

  });
};
export { participatorLogin, showAllLanguage,startContestPage};

