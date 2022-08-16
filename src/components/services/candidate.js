import axios from 'axios'
const CANDIDATE_LOGIN_URL='http:8080/doSignInForParticipator'
const CANDIDATE_REGISTRATION_URL=` http:8080/candidateRegistration`

const candidateLogin=()=>{
    return axios.post(CANDIDATE_LOGIN_URL)
}
const candidateRegistration=()=>{
    return axios.post(candidateRegistration)
}
export {candidateLogin,candidateRegistration}