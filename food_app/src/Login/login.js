import React from 'react';
import './login.css'
import tmlogo from "../images/tmlogo.png"
import foodlogo from "../images/foodlogo.png"
import envelope from "../images/envelope.png"
import padlock from "../images/padlock.png"
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Layout = () => {
  const [Email,setEmail] = useState("")   
  const [Password,setPassword] = useState("") 
  const [loading, setLoading] = useState("");
  // const [token, setToken] = useState();
  const navigate = useNavigate();


  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://89.38.135.41:7654/api/auth/authenticate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: Email,
            password:Password 
          }),
        }
      );

      const data = await response.json();
      localStorage.setItem('Token',data.data.accessToken);
      
      console.log()
      if (data.status) {
        setLoading(false);
        
        
        // If data.status is true, redirect to '/home'
        navigate("/onboarding");
      } else {
        setLoading(false);
        // Handle the case where data.status is false or not present
      }
    } catch (error) {
      setLoading(false);
    }
  };


  return (
    // Main container
    <main path="/" className="main_cont">
    {/* First container (left side) */}
 <section className="first_cont">
        <img src={tmlogo} alt="" />
        <div className="food_logo">
          <img src={foodlogo} className="foodlogo34" alt="" />
        </div>

        <div className="down_text">
          <div>
            <b>Order your</b> <span>favorite lunch</span>
          </div>
          <span>&</span>
          <span>Enjoy  other <b>Services</b></span>

          <p className='curve'></p>
          

        </div>
        
      </section>

{/* Second container (right side) */}

      <section className="second_contl">

      
      <img src={tmlogo} className="foodlogo25" alt="" />
      

        <b className='welcome_text'>Welcome Back</b>
        <span className='sign_text'> Sign in with your email address and password</span>

          <label className='email'> Email Address</label>
          <div className='email'> 
            <div className='envelope'><img src={envelope} className="email_img" alt="" /> </div>
            <div className='placeholder'><input className='input' type='input' placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)}></input></div>
          </div>

          
          <label className='password'> Password</label>
          <div className='email'> 
            <div className='envelope'><img src={padlock} className="email_img" alt="" /> </div>
            <div className='placeholder'><input className='input' type='input' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}></input></div>
          </div>

            
          <div className='checkbox'>
          <div className='check'> 
            <input type='checkbox'/>
            <div className='rtext'>Remember me</div>
          </div>
          <Link to="/forgot" className='rtext'>Forgot Password?</Link>
          </div>
<div  onClick={handleLogin}>
<div className='login_btn' > <b className='login_text'>
{loading ? "loading..." : "Login"}
  </b> </div>

</div>

        <div className='register'>
            <div >Don't have an account? </div>
            <Link to="/signup"  className='register_link'>Register</Link>
          </div>

      </section>
    </main>
  );
}

export default Layout