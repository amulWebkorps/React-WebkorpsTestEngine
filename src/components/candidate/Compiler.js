import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../UI/Header";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { Navigate, useLocation } from "react-router-dom";
import { showAllLanguage } from "../services/candidate";
import { startContestPage } from "../services/candidate";
import { runAndCompilerCode } from "../services/candidate";
import { useNavigate } from "react-router-dom";
import MsgBar from "../auth/base/MsgBar";


const div1 = {
  height: "70vh",
  marginTop: "30px",
  background: " #F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "17px",
};

const blue1 = {
  width: "10px",
  height: "70vh",
  marginLeft: "-24px",
  background: "#0057FF",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "18px 0px 0px 18px",
};

const rightDiv = {
  height: "68.81px",
  background: "white",
  borderRadius: "17px 17px 0px 0px",
  marginTop: "20px",
};

const testCase = {
  height: "30vh",
  background: "#F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "17px",
};

const testCaseText = {
  height: "69.23px",
  background: "#F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  bordeRadius: "17px 17px 0px 0px",
};

const testCaseText1 = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "30px",
  lineHeight: "35px",
  color: "#000000",
};
const testCaseText2 = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "25px",
  lineHeight: "35px",
  color: "#000000",
};
const inputLabel = {
  fontFamily: "Raleway",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "21px",
  letterSpacing: "0em",
  textAlign: "left",
  margin: "10px",
};
const testCaseResult = {
  height: "48px",
  background: "#F9FAFC",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  borderRadius: "7px 17px 0px 0px",
};

const inputField = {
  marginTop: "10px",
  height: "14vh",
  background: "#FFFFFF",
  overflowY: "scroll",
  boxShadow: "2px 9px 19px rgba(230, 230, 230, 0.37)",
  marginBottom: "10px",
};

const CodeCompilerText1 = {
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "35px",
  letterSpacing: "0em",
  textAlign: "left",
};

const buttonTest = {
  width: "100px",
  height: "40px",
  background: "#0057ff",
  borderRadius: "8px",
  color: "white",
  fontweight: "bold",
  margin: "10px",
  border: "1px solid #0057ff",
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
};

 const testCaseData1={
  display: "flex",
  flexDirection:"row",
  justifyContent:"end",

 }
 const testCaseData={
  display: "flex",
  flexDirection:"row",
 }
 const inputName={
  fontWeight: "600",
  fontweight: "bold",

 }

 const timerText={
  fontWeight: "500",
  fontweight: "bold",

 }
 

const Compiler = () => {
  const [language2, setLanguage2] = useState();
  const [defaultCode, setDefaultCode] = useState("");
  const [codeValue, setCodeValue] = useState();
  const location = useLocation();
  const [profile, setProfile] = useState(location?.state);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  const [participatorsContestDetails, setParticipatorsContestDetails] = useState();
  const [runCode1, setRunCode1] = useState();
  const [codeArray, setCodeArray] = useState([]);
  const [show, setShow] = useState(false);
  const [showTestCase, setShowTestCase] = useState(false);
  const [times,setTime]=useState(10000);
  const [counter, setCounter]=useState(0);
  const [showError,setShowError]=useState(false)
  const Ref = useRef(null);
  const ref = useRef(null);
	const [timer, setTimer] = useState('00:00:00');


  var TimeFormat = require('hh-mm-ss')

  const timerGet=.20
  const finalGet=(timerGet*60000)
  console.log(finalGet,"getdatahhh")
  const  changeseconds=(timerGet*60)

  const fetchStartContestData = async () => {
    try {
      const result = await startContestPage(
        location?.state?.language,
        profile?.participatorData
      ).then();
      console.log(result?.data, "akkkkkkk");

      setParticipatorsContestDetails(result?.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchStartContestData();
  }, []);
  

useEffect(()=>{
    if (runCode1?.complilationMessage===null){
      setShowError(true)
    }
},[runCode1])

useEffect(() => {
  let timeout
  if (showError) {
    timeout = setTimeout(() =>setShowError(false), 3000);
  }
  return () => clearTimeout(timeout);
}, [showError]);





 console.log(" participatorsContestDetails", participatorsContestDetails)
  console.log("location", location);

  const runCode = async (flag) => {
    try {
      const resultData = await runAndCompilerCode( {
        language: participatorsContestDetails?.languageCode?.language,
        questionId: participatorsContestDetails?.QuestionList[count]?.questionId,
        contestId: participatorsContestDetails?.contestId,
        studentId: participatorsContestDetails?.studentId,
        flag: flag,
        code: `${codeValue}`,
      }).then();
      console.log(resultData, "runcode");
      setRunCode1(resultData.data);
    
    
      setShowTestCase(true)
      
    } catch (error) {
      console.log(error);
    }
  };

  console.log("runcode", runCode1);


  

  const handleScroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };


  const onChange = (codeData) => {
    setCodeValue(codeData);
  };

  const handleRun = () => {
   setCodeArray((oldArray) => [...oldArray, codeValue]);
  };

  console.log("code---------cfc", codeValue);
  console.log("hjbjhbvss", codeArray);
 

  const navigate = useNavigate();
useEffect(()=>{
   if  (runCode1?.complilationMessage===null){
  }

  else if (count===participatorsContestDetails?.QuestionList?.length){
    console.log('------if part')
    alert("final button")
    navigate('/thanku')
  }
  else{
    console.log('-------else part')
  }


},[counter])
 const handleButton=()=>{
  setCounter(counter+1)
  console.log(counter,"counter")
 }

  console.log("rfgh", defaultCode);
  const nextQuestion = (e) => {
    setCount(function (prevCount) {
      console.log(prevCount, "===========");
      if (prevCount <= participatorsContestDetails?.QuestionList?.length) {
        return (prevCount += 1);
      } else {
        return (prevCount = participatorsContestDetails?.QuestionList?.length);
      }
    });
    setCodeValue(location?.state?.defaultCode);
    
  };
  console.log(count1, "rtyg");
  const prevQuestion = (e) => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });   
  };
  useEffect(()=>{  
    if(times>0){
     setTimeout(()=>setTime(times-1),1000)
     
    }  
},[times])

useEffect(()=>{
  const Time = TimeFormat?.fromS(1000, 'hh:mm:ss') 
 console.log(Time,"Time")
},[participatorsContestDetails])



const getTimeRemaining = (e) => {
  const total = Date.parse(e) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  return {
    total, hours, minutes, seconds
  };
}


const startTimer = (e) => {
  let { total, hours, minutes, seconds }
        = getTimeRemaining(e);
  if (total >= 0) {
    setTimer(
      (hours > 9 ? hours : '0' + hours) + ':' +
      (minutes > 9 ? minutes : '0' + minutes) + ':'
      + (seconds > 9 ? seconds : '0' + seconds)
    )
  }
}


const clearTimer = (e) => {
  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
    startTimer(e);
  }, 100)
  Ref.current = id;	
}

const getDeadTime = () => {
  let deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + changeseconds);
  return deadline;
}

useEffect(() => {
  clearTimer(getDeadTime());
}, []);


// setTimeout(function(){
//   window.location.href = '/thanku';
// }, finalGet);








  return (
    <Box>
      <Header />
      <Box className="background1">
       
     { showError &&   <MsgBar
              errMsg={
              "error while compile"
              }
              color={"orange" }
            />}
        <Grid container>
          
          <Grid item sm={6}>
          <Box sx={testCaseData1} mx={5} >
      <Typography>Remaining Time :-</Typography ><Typography sx={timerText}>{timer}</Typography>  
      </Box>
        
            <Box mx={3}>
              <Container sx={div1}>
                <Grid container>
                  <Grid item sm={0.5} sx={blue1}>
                    <box></box>
                  </Grid>

                  <Grid item sm={11.5}>
                    <Grid item sm={12}>
                      <Box sx={testCaseText}>
                        <Typography sx={testCaseText1} mx={2}>
                          Test Case {count1}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item sm={12}>
                      <Box>
                        <Typography style={inputLabel}>
                          Problem statement
                        </Typography>
                        <Box style={inputField} p={2}>
                          <Typography>
                            {
                              participatorsContestDetails?.QuestionList[count]
                                ?.question
                            }
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item sm={12}>
                      <Box>
                        <Typography style={inputLabel}>Constraints</Typography>
                        <Box style={inputField} p={2}>
                          <Typography>
                            {
                              participatorsContestDetails?.QuestionList[count]
                                ?.sampleTestCase[0]?.constraints
                            }
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid container sm={12}>
                      <Grid item sm={6} px={2}>
                        <Box>
                          <Typography style={inputLabel}>
                            Sample Input
                          </Typography>
                          <Box style={inputField} p={2}>
                            <Typography>
                              {
                                participatorsContestDetails?.QuestionList[count]
                                  ?.sampleTestCase[0]?.input
                              }
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid sm={6} px={2}>
                        <Box>
                          <Typography style={inputLabel}>
                            Sample Output
                          </Typography>
                          <Box style={inputField} p={2}>
                            <Typography>
                              {
                                participatorsContestDetails?.QuestionList[count]
                                  ?.sampleTestCase[0]?.output
                              }
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => prevQuestion()}
                  disabled={count===0 }
                >
                  Prev
                </Button>
                <Button                 
                  variant="contained"               
                  sx={buttonTest}
                  onClick={() => nextQuestion()}
                  disabled={participatorsContestDetails?.QuestionList?.length-1 === count }
                >
                  Next
                </Button>
              </Grid>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box mx={3}>
              <Grid container>
                <Grid item sm={6} sx={{ display: "flex" }}>
                  <Box>
                    <Typography sx={inputName}>Name:- </Typography>
                  </Box>
                  <>
                    <Typography sx={inputName}>
                      {profile?.participatorData?.state?.data?.name}
                    </Typography>
                  </>
                </Grid>
                <Grid item sm={6} sx={{ display: "flex" }}>
                  <Box>
                    <Typography sx={inputName}>Email:- </Typography>
                  </Box>
                  <Box>
                    <Typography sx={inputName}>
                      {profile?.participatorData?.state?.data?.email}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Container sx={rightDiv}>
                <Grid container>
                  <Grid item sm={12}>
                    <Typography mt={1.5}>
                      <div style={CodeCompilerText1}>Code Compiler</div>
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              <Box>
                <AceEditor
                  mode={location?.state?.language}
                  theme="monokai"
                  name="code"
                  editorProps={{ $blockScrolling: true }}
                  height="60vh"
                  width="46.5vw"
                  value={codeValue}
                  onChange={onChange}
                  defaultValue={location?.state?.defaultCode}
                  fontSize="20px"
                />
              </Box>
              <Grid container sx={{ justifyContent: "end" }}>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => {
                    runCode("0"); 
                    handleScroll()                                 
                  }}
                >
                  Run
                </Button>
                <Button
                  variant="contained"
                  sx={buttonTest}
                  onClick={() => {  
                    runCode("1")     
                  handleButton()           
                  }}
                >
                 {show ? "final submit" : 'submit'}
                </Button>
               
              </Grid>
            </Box>
            <Grid>
              <Grid containner sx={testCase} m={3} ref={ref} >
                <Grid item sm={12} sx={testCaseResult}>
                  <Typography m={3} mt={2} sx={testCaseText1}>
                    Test Case
                  </Typography>
                </Grid>
                { showTestCase && 
                 <Grid sx={testCaseData} >
                 <Typography m={3} mt={2} sx={testCaseText2}>
                 input               
                      {participatorsContestDetails?.QuestionList[count]
                                 ?.testcases.map((val,index)=>{
                                   return(
                                   <div key={index}>
                                    <p>{val.input}</p>
                                   </div>
                                   )
                                 })}
                                                   
                 </Typography>
                 <Typography m={3} mt={2} sx={testCaseText2}>
                 output   
                 <br/>
                      {participatorsContestDetails?.QuestionList[count]
                                 ?.testcases.map((val,index)=>{
                                   return(
                                   <div key={index}>
                                    <p>{val.output}</p>
                                   </div>
                                   )
                                 })}                                       
                   {runCode1?.complilationMessage}
                 </Typography>
                 <Typography m={3} mt={2} sx={testCaseText2}>           
                   {runCode1?.complilationMessage}
                 </Typography>
               </Grid>  
            }            
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Compiler;
