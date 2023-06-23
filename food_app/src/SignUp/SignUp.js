import React, { useState } from 'react'
import "./SignUp.css"
import tmlogo from "../images/tmlogo.png"
import foodlogo from "../images/foodlogo.png"
import padlock from "../images/padlock.png"
import envelope from "../images/envelope.png"
import person from "../images/person.png"
import phone from "../images/phonelogo.png"
import { Link } from 'react-router-dom';
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"


export const SignUp = () => {

    const [inputPass, setInputPass] = useState('password')
    const [show, setShow] = useState (false)

    const handleShow = () => {
        setShow (!show)
        setInputPass (inputPass==='password'?'text':'password')
    }

    const[inputPassTwo, setInputPassTwo] = useState('password')
    const [showTwo, setShowTwo] = useState (false)

    const handleShowTwo = () => {
        setShowTwo (!showTwo)
        setInputPassTwo (inputPassTwo==='password'?'text':'password')
    }

  return (
   // Main container
   <main path="/" className="main_cont">
   {/* First container (left side) */}
   <section className="first_cont">
     <img src={tmlogo} className='tm_logo' alt="" />
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

   {/* Second container */}

   <section className='second_cont'>

   <div className='food_logo2'>
      <img src={tmlogo} className="foodlogo2" alt="" />
      </div>

      <span className='details_text'> Please fill in your details to get started</span>

      <label className='first_name'> Email Address </label>
          <div className='name'> 
          <div className='person'><img src={envelope} className="email_img" alt="" /> </div>

            <div className='placeholder'><input className='input' type='' placeholder='Adelekepeters@gmail.com'></input></div>
          </div>
          <br></br>

          <label className='first_name'> Phone Number</label>
          <div className='name'> 
            <div className='person'><img src={phone} className="phonelogo" alt="" /> </div>
            <div className='placeholder'><input className='input2' type='' placeholder= '09167389284'></input></div>
          </div>
          <br></br>

<label className='first_name'> First Name</label>
          <div className='name'> 
            <div className='person'><img src={person} className="person_img" alt="" /> </div>
            <div className='placeholder'><input className='input' type='' placeholder='Enter your first name'></input></div>
          </div>

          
          <label className='last_name'> Last Name</label>
          <div className='name'> 
            <div className='person'><img src={person} className="person_img" alt="" /> </div>
            <div className='placeholder'><input className='input' type='' placeholder='Enter your first name'></input></div>
          </div>

            
          <label className='password'> New Password</label>
          <div className='email'> 
            <div className='envelope'><img src={padlock} className="email_img" alt="" /> </div>
            <div className='placeholder'>
                <input 
                className='input'
                type={inputPass}
                placeholder='New password'
                />
                  <button className='eye' onClick={handleShow} >{show? <AiOutlineEyeInvisible/> : <AiOutlineEye/>} </button>
                </div>
          </div>

          <label className='password'> Confirm New Password</label>
          <div className='email'> 
            <div className='envelope'><img src={padlock} className="email_img" alt="" /> </div>
            <div className='placeholder'>
                <input 
                className='input' 
                type={inputPassTwo} 
                placeholder='Confirm New password'
                />
                <button className='eye' onClick={handleShowTwo}>{showTwo? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                    
                </button>
                </div>
          </div>

<Link to="/proceed" className='register_btn' > <b className='register_text'>Register</b> </Link>

          <div className='account'>
            <div >Already have an account? </div>
            <Link to="/"  className='login_link'>Login</Link>
          </div>
          
        




   </section>

{/* End of second container */}

   </main>

//  End  of main container

  );
}

export default SignUp
