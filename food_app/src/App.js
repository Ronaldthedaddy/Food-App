import Login from "./Login/Layout"
import Signup from "./SignUp/SignUp"
import Proceed from "./Proceed/Proceed"
import Forgot from "./Forgot/forgot"
import Reset from "./Reset/Reset"
import Onboarding from "./Onboarding/Onboarding"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/proceed" element={<Proceed/>}/>
        <Route path ="/onboarding" element= {<Onboarding/>}/>
        {/* <Route path="/success" element={<Login/>} */}
        {/* <Route path="/register" element={<Signup}></Route>  */}

      </Routes>
    </Router>
    
    // <div className="App">
      // <Layout/>
    // </div>


  );
}

export default App;
