import axios from "axios";
const BASE_URL = `http://localhost:8085`;
const PARTICIPATOR_LOGIN_URL = `${BASE_URL}/public/doSignInForParticipator`;
const SHOW_ALL_LANGUAGE = `${BASE_URL}/showAllLanguage`;
const START_CONTEST_PAGE = `${BASE_URL}/startContestPage`;

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

const startContestPage = () => {
  return axios.post(START_CONTEST_PAGE, {
    params: {
      contestId: "62f1123c197f857ee1f940e0",
      language: "java",
      studentId: "2910e8d7-ef82-43f8-8b2b-f5e211ba98e2",
    },
  });
};
export { participatorLogin, showAllLanguage, startContestPage };
