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
import Login from "./components/auth/Login";
import RegisterOne from "./components/auth/RegisterOne";
import RegisterTwo from "./components/auth/RegisterTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionList from "./components/admin/QuestionList";
function App() {
  return (
    <>
      {/* <Dashbord/> */}
      {/* <Login/>
     <RegisterOne/>
     <RegisterTwo/>
      <AnswerSheet /> */}
{/* <QuestionList/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<RegisterOne />}></Route>
          <Route path="/password" element={<RegisterTwo/>}></Route>
          <Route path="/dashboard" element={<Dashbord/>}></Route>
          <Route path="/addQuestion" element={<QuestionList/>}></Route>
          <Route path="/participator" element={<AnswerSheet/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;