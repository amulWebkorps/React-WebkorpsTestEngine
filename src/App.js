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
const theme = createTheme({
  palette: {
    primary: {
      main: "#0057ff",
    },
  },
});

function App() {
  const [registercredential, setregistercredential] = useState({
    hName: "",
    email: "",
    hNumber: "",
    password: "",
  });
  const token = localStorage?.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    // if access token is expire it redirected to login page
    if (token !== null) {
      const decodeToken = jwt_decode(token);
      if (decodeToken?.exp * 1000 < Date.now()) {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [window.location]);

  useEffect(() => {
    // define increment counter part
    const tabsOpen = localStorage.getItem("tabsOpen");
    if (tabsOpen == null) {
      localStorage.setItem("tabsOpen", 1);
    } else {
      localStorage.setItem("tabsOpen", parseInt(tabsOpen) + parseInt(1));
    }
    
    window.onunload = function (e) {
      const newTabCount = localStorage.getItem("tabsOpen");
      if (newTabCount !== null) {
        localStorage.setItem("tabsOpen", newTabCount - 1);
      }
    };
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      window.localStorage.isMySessionActive = "false";
    } else {
      const newTabCount2 = localStorage.getItem("tabsOpen");
      let value = localStorage.getItem("isMySessionActive");
      console.log(newTabCount2)
      if (value == "true") {
        if (newTabCount2 - 1 == 0) {
          localStorage.clear();
          window.localStorage.isMySessionActive = "false";
        } else {
          window.localStorage.isMySessionActive = "false";
        }
      }
    }
    }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AdminRoutes
                Component={Login}
                setregistercredential={setregistercredential}
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
                registercredential={registercredential}
                setregistercredential={setregistercredential}
              />
            }
          ></Route>
          <Route
            path="/password"
            element={
              <RegisterStepTwo
                registercredential={registercredential}
                setregistercredential={setregistercredential}
              />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={<AdminRoutes Component={Dashbord} />}
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
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
