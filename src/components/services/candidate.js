import axios from 'axios'
const PARTICIPATOR_LOGIN_URL='http://localhost:8085/doSignInForParticipator'
const CANDIDATE_REGISTRATION_URL=` http:8080/candidateRegistration`

const participatorLogin=(contestId,credential)=>{
    return axios.get(PARTICIPATOR_LOGIN_URL, {
        params: {
          contestId:contestId,
          email: credential?.email,
          password: credential?.password,
        },
      });
}

export {participatorLogin}