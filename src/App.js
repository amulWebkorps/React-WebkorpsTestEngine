
import "./App.css";
import Dashbord from "./components/admin/Dashbord";
import Header from "./components/UI/Header";
import Compiler from "./components/candidate/Compiler";
import EmailShow from "./components/candidate/EmailShow";
function App() {
  return (
    <div className="App">
    
     <Header/>
      {/* <Dashbord/> */}
      {/* <Compiler/> */}
      <EmailShow/>
    </div>
  );
}

export default App;
