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
import AnswerSheet from "./components/admin/AnswerSheet";
import Dashbord from "./components/admin/Dashbord";
import Header from "./components/UI/Header";
import Compiler from "./components/candidate/Compiler";
import EmailShow from "./components/candidate/EmailShow";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import All from "./components/admin/All";


const theme = createTheme({
  palette: {
    primary: {
      main: "#0057ff",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {/* <Dashbord/> */}
        {/* <Compiler/>
        <EmailShow /> */}
        <All />
      </div>
    </ThemeProvider>
  );
}

export default App;






