import React, { useState } from 'react'
import './Reset.css'
import tmlogo from "../images/tmlogo.png"
import foodlogo from "../images/foodlogo.png"
import padlock from "../images/padlock.png"
import arrow from "../images/arrow.png"
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
import { Link } from "react-router-dom";


export const Reset = () => {

    
    const [inputPassThree, setInputPassThree] = useState('password')
    const [showThree, setShowThree] = useState (false)

    const handleShowThree = () => {
        setShowThree (!showThree)
        setInputPassThree (inputPassThree==='password'?'text':'password')
    }

    const[inputPassFour, setInputPassFour] = useState('password')
    const [showFour, setShowFour] = useState (false)

    const handleShowFour = () => {
        setShowFour (!showFour)
        setInputPassFour (inputPassFour==='password'?'text':'password')
    }
  return (
    <main className='main_cont'>
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
          
        
        </div>
        
      </section>

{/* Second container (right side) */}


<section className="second_cont">

<Link to="/forgot" className="top">
    <div><img src={arrow} className="arrow" alt=""/></div>
    <div className="back"> Back</div>
    </Link>

    <article className='reset_box'>
        
    <div className="forgot_text">Reset Password</div>
    <div className="reset_text">Here you have to reset password</div>
    
      
    <div className="bothpassword">

    <label className='password'> New Password</label>
          <div className='email'> 
            <div className='envelope'><img src={padlock} className="email_img" alt="" /> </div>
            <div className='placeholder'>
                <input 
                className='input'
                type={inputPassThree}
                placeholder='New password'
                />
                  <button className='eye' onClick={handleShowThree} >{showThree? <AiOutlineEyeInvisible/> : <AiOutlineEye/>} </button>
                </div>
          </div>

          <label className='password'> Confirm New Password</label>
          <div className='email'> 
            <div className='envelope'><img src={padlock} className="email_img" alt="" /> </div>
            <div className='placeholder'>
                <input 
                className='input' 
                type={inputPassFour} 
                placeholder='Confirm New password'
                />
                <button className='eye' onClick={handleShowFour}>{showFour? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                    
                </button>
                
                </div>

          </div>
          <Link to="/"> <b className='sendlink2'>Reset Password</b> </Link>

    </div>

    </article>
   
</section>

   </main>
    )
}
  
export default Reset