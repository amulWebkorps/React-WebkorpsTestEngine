import "./App.css";
import { useState, useEffect } from "react";
import AnswerSheet from "./components/admin/AnswerSheet";
import Dashbord from "./components/admin/Dashbord";
import Compiler from "./components/candidate/Compiler";
import EmailShow from "./components/admin/EmailShow";
import Login from "./components/auth/Login";
import RegisterStepOne from "./components/auth/RegisterStepOne";
import RegisterStepTwo from "./components/auth/RegisterStepTwo";
import jwt_decode from "jwt-decode";
// import RegisterOne from "./components/auth/RegisterStepOne";
// import RegisterTwo from "./components/auth/RegisterStepTwo";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import QuestionList from "./components/admin/QuestionList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import All from "./components/admin/All";
import Level1 from "./components/admin/Level1";
import Level2 from "./components/admin/Level2";
import Allavailable from "./components/admin/Allavailable";
import Instruction from "./components/candidate/Instruction";
import AdminRoutes from "./AdminRoutes";
import CandidateRoutes from "./CandidateRoutes";
import viewParticipatorDetail from "./components/admin/ViewParticipatorDetail";
import Thankupage from "./components/UI/Thankupage";
import CandidateLogin from "./components/candidate/CandidateLogin";
import McqPage from "./components/admin/McqPage";
import McqParticipator from "./components/admin/McqParticipator";
import AllMcq from "./components/admin/AllMcq";
import McqQuestion from "./components/candidate/McqQuestion";
import McqInstruction from "./components/candidate/McqInstruction";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0057ff",
    },
  },
});

function App() {
  const [registerCredential, SetRegisterCredential] = useState({
    hName: "",
    email: "",
    hNumber: "",
    password: "",
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AdminRoutes
                Component={Login}
                SetRegisterCredential={SetRegisterCredential}
              />
            }
          ></Route>
          <Route
            path="/email"
            element={<AdminRoutes Component={EmailShow} />}
          ></Route>
          <Route
            path="/register"
            element={
              <RegisterStepOne
                registerCredential={registerCredential}
                SetRegisterCredential={SetRegisterCredential}
              />
            }
          ></Route>
          <Route
            path="/password"
            element={
              <RegisterStepTwo
                registerCredential={registerCredential}
                SetRegisterCredential={SetRegisterCredential}
              />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={<AdminRoutes Component={Dashbord} />}
          ></Route>
          <Route
            path="/mcqPage"
            element={<AdminRoutes Component={McqPage} />}
          ></Route>
          <Route
            path="/mcqParticipator"
            element={<AdminRoutes Component={McqParticipator} />}
          ></Route>
          <Route
            path="/allmcq"
            element={<AdminRoutes Component={AllMcq} />}
          ></Route>
          <Route
            path="/addQuestion"
            element={<AdminRoutes Component={QuestionList} />}
          ></Route>
          <Route
            path="/participator"
            element={<AdminRoutes Component={AnswerSheet} />}
          ></Route>
          <Route
            path="/viewparticipator"
            element={<AdminRoutes Component={viewParticipatorDetail} />}
          ></Route>

          <Route
            path="/level1"
            element={<AdminRoutes Component={Level1} />}
          ></Route>
          <Route
            path="/level2"
            element={<AdminRoutes Component={Level2} />}
          ></Route>
          <Route path="/all" element={<AdminRoutes Component={All} />}></Route>
          <Route
            path="/allavailable"
            element={<AdminRoutes Component={Allavailable} />}
          ></Route>
          <Route
            path="/instruction"
            element={<CandidateRoutes Component={Instruction} />}
          ></Route>
          <Route path="/login/:id" element={<CandidateLogin />}></Route>
          <Route
            path="/user"
            element={<CandidateRoutes Component={Compiler} />}
          ></Route>
          <Route
            path="/thanku"
            element={<CandidateRoutes Component={Thankupage} />}
          ></Route>
          <Route
            path="mcqInstruction"
            element={<CandidateRoutes Component={McqInstruction} />}
          ></Route>
          <Route
            path="/mcqQuestion"
            element={<CandidateRoutes Component={McqQuestion} />}
          ></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
