
import "./App.css";
import Dashbord from "./components/admin/Dashbord";
import Header from "./components/UI/Header";
import Compiler from "./components/candidate/Compiler";
function App() {
  return (
    <div className="App">
    
     <Header/>
      {/* <Dashbord/> */}
      <Compiler/>
    </div>
  );
}

export default App;
