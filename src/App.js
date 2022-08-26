// import "./App.css";
// import AnswerSheet from "./components/admin/AnswerSheet";
// import Dashbord from "./components/admin/Dashbord";
// import Login from "./components/auth/Login";
// import RegisterOne from "./components/auth/RegisterOne";
// import RegisterTwo from "./components/auth/RegisterTwo";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <>
//       {/* <Dashbord/>
//      <RegisterOne/>
//      <RegisterTwo/>
//       <AnswerSheet /> */}

//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />}></Route>
//           <Route path="/register" element={<RegisterOne />}></Route>
//           <Route path="/password" element={<RegisterTwo/>}></Route>
//           <Route path="/dashboard" element={<Dashbord/>}></Route>
//           <Route path="/answersheet" element={<AnswerSheet/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import "./App.css";
import { useState } from "react";
import AnswerSheet from "./components/admin/AnswerSheet";
import Dashbord from "./components/admin/Dashbord";
import Compiler from "./components/candidate/Compiler";
import EmailShow from "./components/admin/EmailShow";
import Login from "./components/auth/Login";
import RegisterOne from "./components/auth/RegisterOne";
import RegisterTwo from "./components/auth/RegisterTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionList from "./components/admin/QuestionList";
import Errorpage from "./components/auth/Errorpage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import All from "./components/admin/All";
import Level1 from "./components/admin/Level1";
import Level2 from "./components/admin/Level2";
import Allavailable from "./components/admin/Allavailable";
import Instruction from "./components/candidate/Instruction";
import Protected from "./Protected";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0057ff",
    },
  },
});

function App() {
  const [admin, setAdmin] = useState(true);
  const [registercredential, setregistercredential] = useState({
    hName: "",
    email: "",
    hNumber: "",
    password: "",
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Protected Component={Login} admin={admin} />}
            ></Route>
            <Route path="/login/:id" element={<Login />}></Route>
            <Route
              path="/user"
              element={<Protected Component={Compiler} />}
            ></Route>
            <Route
              path="/email"
              element={<Protected Component={EmailShow} />}
            ></Route>
            <Route
              path="/register"
              element={
                <RegisterOne
                  registercredential={registercredential}
                  setregistercredential={setregistercredential}
                />
              }
            ></Route>
            <Route
              path="/password"
              element={
                <RegisterTwo
                  registercredential={registercredential}
                  setregistercredential={setregistercredential}
                />
              }
            ></Route>
            <Route
              path="/dashboard"
              element={<Protected Component={Dashbord} />}
            ></Route>
            <Route
              path="/addQuestion"
              element={<Protected Component={QuestionList} />}
            ></Route>
            <Route
              path="/participator"
              element={<Protected Component={AnswerSheet} />}
            ></Route>
            <Route
              path="/level1"
              element={<Protected Component={Level1} />}
            ></Route>
            <Route
              path="/level2"
              element={<Protected Component={Level2} />}
            ></Route>
            <Route path="/all" element={<Protected Component={All} />}></Route>
            <Route
              path="/allavailable"
              element={<Protected Component={Allavailable} />}
            ></Route>
            <Route
              path="/instruction"
              element={<Protected Component={Instruction} />}
            ></Route>
            {/* <Route
              path="*"
              element={<Protected Component={Login} admin={admin} />}
            ></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
