import "./App.css";
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






