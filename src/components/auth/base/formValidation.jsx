const questionValidation = (problemStatement,sampleTestCase,testCaseList) => {
  if (
    problemStatement?.question === "" ||
    sampleTestCase?.constraints === "" ||
    sampleTestCase?.input === "" ||
    sampleTestCase?.output === "" ||
    testCaseList.length === 0
  ) {
    return true;
  } else {
    return false;
  }
};
const contestValidation = (inputData) => {
  if (
    inputData.contestName === "" ||
    inputData.contestDescription === "" ||
    inputData.contestLevel === "" ||
    inputData.contestTime === ""
  ) {
    return true;
  } else {
    return false;
  }
};


const registerValidation = (registerCredential,setAlert,setMsg) => {
  if (
    registerCredential.hName ==="" ||
    registerCredential.email === "" ||
    registerCredential.hNumber === ""
  ) {
    setAlert(true);
    setMsg("Please fill all details");
    return false;
  } else if (!/.+@.+\.[A-Za-z]+$/.test(registerCredential.email) === true) {
    setAlert(true);
    setMsg("Plese enter vallid email address");
    return false;
  } else if (
    registerCredential.hNumber === Number("credential.hNumber") ||
    registerCredential.hNumber === "" ||
    registerCredential.hNumber[0] === "-" ||
    registerCredential.hNumber.length > 10 ||
    registerCredential.hNumber.length < 10
  ) {
    setAlert(true);
    setMsg("Please enter valid phone number");
    return false;
  } else {
    return true;
  }
};

const expectedType=`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
export { questionValidation,contestValidation,registerValidation,expectedType };
