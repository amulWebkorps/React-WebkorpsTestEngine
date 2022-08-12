import "./App.css";
import AnswerSheet from "./components/admin/AnswerSheet";
import Dashbord from "./components/admin/Dashbord";
import Login from "./components/auth/Login";
import RegisterOne from "./components/auth/RegisterOne";
import RegisterTwo from "./components/auth/RegisterTwo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Dashbord/>
      <Login/>
     <RegisterOne/>
     <RegisterTwo/>
      <AnswerSheet /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<RegisterOne />}></Route>
          <Route path="/password" element={<RegisterTwo/>}></Route>
          <Route path="/dashboard" element={<Dashbord/>}></Route>
          <Route path="/answersheet" element={<AnswerSheet/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
