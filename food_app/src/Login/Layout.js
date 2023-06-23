import React from 'react';
import './Layout.css'
import tmlogo from "../images/tmlogo.png"
import foodlogo from "../images/foodlogo.png"
import envelope from "../images/envelope.png"
import padlock from "../images/padlock.png"
import { Link } from 'react-router-dom';
// import curve from "../images/curve.png"

export const Layout = () => {
  return (
    // Main container
    <main path="/" className="main_cont">
      {/* First container (left side) */}
      <section className="first_cont">
        <img src={tmlogo} alt="" />
        <div className="food_logo">
          <img src={foodlogo} className="foodlogo" alt="" />
        </div>

        <div className="down_text">
          <div>
            <b>Order your</b> <span>favorite lunch</span>
          </div>
          <span>&</span>
          <span>Enjoy  other <b>Services</b></span>

          <p className='curve'></p>
          
          {/* <div className='curvebox'>
            <img src={curve} className="curve" alt=""/>
          </div> */}

        </div>
        
      </section>

{/* Second container (right side) */}

      <section className="second_cont">

      <div className='food_logo2'>
      <img src={tmlogo} className="foodlogo2" alt="" />
      </div>

        <b className='welcome_text'>Welcome Back</b>
        <span className='sign_text'> Sign in with your email address and password</span>

          <label className='email'> Email Address</label>
          <div className='email'> 
            <div className='envelope'><img src={envelope} className="email_img" alt="" /> </div>
            <div className='placeholder'><input className='input' type='' placeholder='Enter your email address'></input></div>
          </div>

          
          <label className='password'> Password</label>
          <div className='email'> 
            <div className='envelope'><img src={padlock} className="email_img" alt="" /> </div>
            <div className='placeholder'><input className='input' type='' placeholder='Enter your password'></input></div>
          </div>

            
          <div className='checkbox'>
          <div className='check'> 
            <input type='checkbox'/>
            <div className='rtext'>Remember me</div>
          </div>
          <Link to="/forgot" className='rtext'>Forgot Password?</Link>
          </div>
<Link to="/onboarding">
<div className='login_btn' > <b className='login_text'>Login</b> </div>

</Link>

<div className='register'>
            <div >Don't have an account? </div>
            <Link to="/signup"  className='register_link'>Register</Link>
          </div>

      </section>
    </main>
  );
}

export default Layout