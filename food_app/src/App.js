import Login from "./Login/Layout"
import Signup from "./SignUp/SignUp"
import Proceed from "./Proceed/Proceed"
import Forgot from "./Forgot/forgot"
import Reset from "./Reset/Reset"
import Onboarding from "./Onboarding/Onboarding"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard/dashboard"
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebarr"
import Services from "./Services/services"
import Checkout from "./Checkout/checkout"
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
        <Route path ="/dashboard" element= {<Dashboard/>}/>
        <Route path ="/navbar" element= {<Navbar/>}/>
        <Route path ="/sidebar" element= {<Sidebar/>}/>
        <Route path ="/services" element= {<Services/>}/>
        <Route path ="/checkout" element= {<Checkout/>}/>
     
      </Routes>
    </Router>
    
    // <div className="App">
      // <Layout/>
    // </div>


  );
}

export default App;
