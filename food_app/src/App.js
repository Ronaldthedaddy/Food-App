import Login from "./Login/login"
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
import BankTransfer from "./ussdBankTransfer/ussdBankTransfer"
import CardPayment from "./cardPayment/cardPayment"
import SubmitCard from "./submitCard/submitCard"
import PaymentReceived from "./paymentReceived/paymentReceived"
import Settings from "./Settings/settings"
import ResetEmail from "./Reset/resetEmail"
import ResetNumber from "./Reset/resetNumber"
import Homeboarding from "./Homeboarding/homeboarding"
import UserProfile from "./UserProfile/UserProfile"
import ChangePassword from "./UserProfile/ChangePassword"
function App() {
  return (

    <Router>
      <Routes>
        <Route path ="/" element= {<Homeboarding/>}/>
        <Route path="/login" element={<Login/>}/> 
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
        <Route path ="/ussdBankTransfer" element= {<BankTransfer/>}/>
        <Route path ="/cardpayment" element= {<CardPayment/>}/>
        <Route path ="/submitcard" element= {<SubmitCard/>}/>
        <Route path ="/paymentReceived" element= {<PaymentReceived/>}/>
        <Route path ="/settings" element= {<Settings/>}/>
        <Route path ="/resetemail" element= {<ResetEmail/>}/>
        <Route path ="/resetnumber" element= {<ResetNumber/>}/>
        <Route path ="/userprofile" element= {<UserProfile/>}/>
        <Route path ="/changepassword" element= {<ChangePassword/>}/>
      </Routes>
    </Router>
    
   


  );
}

export default App;
