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
export { questionValidation };
