import React from 'react'
import "./Proceed.css"
import tmlogo from "../images/tmlogo.png"
import foodlogo from "../images/foodlogo.png"
import tick from "../images/tick.png"
import { Link } from 'react-router-dom'

export const Proceed = () => {
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
          
          {/* <div className='curvebox'>
            <img src={curve} className="curve" alt=""/>
          </div> */}

        </div>
        
      </section>

{/* Second container (right side) */}


<section className="second_cont">

    <div className='box'>

    <article className='border'>
    <p>
    <div className='tick'>
      <img src={tick} className="ticklogo" alt="" />
      </div>
      <h2 className='awesome'>Awesome </h2>
    <div className='ready'>You’re ready to proceed using this platform</div>

    </p>
    <div className='login_box'>
    <Link to="/" className='login'>Proceed to login</Link>
    </div>
    </article>
   

    </div>
   
</section>

   </main>
    )
}

export default Proceed