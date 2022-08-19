import axios from 'axios'
const ADMIN_LOGIN_URL = `http:8080/doSignInForAdmin`;
const ADMIN_REGISTRATION_URL = `http:8080/doSignInForAdmin`;
const SEND_MAIL = `http:8080/sendMail`;


  const loginAdmin = (credential) => {
    return axios.post("http://192.168.1.74:8085/doSignInForAdmin",credential);
  };
  const registerAdmin = (credential) => {
    return axios.post("http://192.168.1.74:8085/adminRegistration",credential);
  };
  const sendMail = (mailAddress) => {
    return axios.post(SEND_MAIL);
  };

export {loginAdmin,registerAdmin,sendMail}
