
import "./App.css";
// import Dashbord from "./components/admin/Dashbord";
import Login from "./components/auth/Login";
import RegisterOne from "./components/auth/RegisterOne";
import RegisterTwo from "./components/auth/RegisterTwo";

function App() {
  return (
    <>
     {/* <Dashbord/> */}
     <Login/>
     <RegisterOne/>
     <RegisterTwo/>
    </>
  );
}

export default App;
