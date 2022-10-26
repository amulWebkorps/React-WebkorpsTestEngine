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

const expectedType=`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
export { questionValidation,contestValidation,expectedType };
