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
//       <Login/>
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
import Header from "./components/UI/Header";
import Compiler from "./components/candidate/Compiler";
import EmailShow from "./components/candidate/EmailShow";
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#0057ff",
    },
  },
});

function App() {
  const [admin, setAdmin] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Header />
        <Dashbord/>
        <Compiler/>
        <EmailShow />
        <All /> */}
        {/* <Dashbord/> */}
        {/* <Login/>
     <RegisterOne/>
     <RegisterTwo/>
      <AnswerSheet /> */}
        {/* <QuestionList/> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login admin={admin} />}></Route>
            <Route path="/candidate" element={<Login />}></Route>
            <Route path="/loginCandidate/:Id" element={<Login />}></Route>
            <Route path="/user" element={<Compiler />}></Route>
            <Route path="/email" element={<EmailShow />}></Route>
            <Route path="/register" element={<RegisterOne />}></Route>
            <Route path="/password" element={<RegisterTwo />}></Route>
            <Route path="/dashboard" element={<Dashbord />}></Route>
            <Route path="/addQuestion" element={<QuestionList />}></Route>
            <Route path="/participator" element={<AnswerSheet />}></Route>
            <Route path="/level1" element={<Level1/>}></Route>
          <Route path="/level2" element={<Level2/>}></Route>
          <Route path="/all" element={<All/>}></Route>
          <Route path="/allavailable" element={<Allavailable/>}></Route>
          <Route path="/instruction" element={<Instruction/>}></Route>
            <Route path="*" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
