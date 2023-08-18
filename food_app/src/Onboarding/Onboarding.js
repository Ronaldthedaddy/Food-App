import React from 'react'
import "./Onboarding.css"
import tmlogo from "../images/tmlogo.png"
import {AiOutlineSearch} from "react-icons/ai"
import count from "../images/count.png"
import notification from "../images/notification.png"
import human from "../images/human.png"
import ricebox from "../images/ricebox.png"
import mama from "../images/Mama J.png"
import choice from "../images/Choice Meals.png"
import kobe from "../images/Kobe Delicious.png"
import gidi from "../images/Gidi Grills.png"
import star from "../images/star.png"
import iya from "../images/iya.png"
// import anoint from "../images/anoint.png"
// import item from "../images/item.png"
// import tko from "../images/tko.png"
// import odobe from "../images/odobe.png"
// import crown from "../images/crown.png"
// import tega from "../images/tega.png"
// import shop from "../images/shop.png"
import { Link } from 'react-router-dom'
import Hotdeals from './Hotdeals'


export const Onboarding = () => {
    const Vendors = [{
        name: "Mama J Bukka",
        image: mama
    },{
        name: "Choice Meal",
        image: choice

    },{
        name:"Kobe Delicious",
        image: kobe
    },{
        name: "Gidi Grills",
        image: gidi
    }]
  return (

<main className='all_for_one'>

    <navbar className='navbarr'>

    <div className='nav_leftt'>

    <img src={tmlogo} alt="" className='onboardtmlogo'></img>

    </div>

    <div className='nav_searchh'>
            <div className='search_holderr'>
            <AiOutlineSearch className='searchicon'/>
            <input type="text" placeholder="Search for anything" className="search_inputt" />
            </div>

    </div>

    <div className='nav_rightt'>

        <div className='countpartt'>
        <img src={count} className='count' alt=""/>
        <img src={notification} className='notification' alt=""/>
        </div>

    </div>

    <div className='humanpeterr'>
            <img src={human} className='humann' alt=""/>

                <div className='peterr' >
            <span className='adelss'>Adeleke Peters</span>
            <span className='gmaill' >Adelekepet@gmail.com</span>
                 </div> 

    </div>

    </navbar>

<section className="on_header">

        <article className="text-area">
            {/* <img src={background} alt=''/> */}
          <div className="on_txt">
            <span className="wel-txt">Welcome to TM30 Food Platform</span>
            <div className="line"></div>
          </div>
          <p className="cta">
            Order your best <br /> meal at anytime
          </p>
          <span className="extra">Delicious food is waiting for you</span>
        </article>
        <article className="food">
          <img src={ricebox} className='ricebox' alt="" />
        </article>
      </section>


   


    <article className='vendors'>
    <div className='other_text' >Top Vendors </div>

    <Link to="/dashboard">


    <section className='four'>
        {Vendors.map((a)=>{
            return(
        <div className='ven_details'>
        <img src={a.image} alt='' className='mama'/>
        <div className='ven_name'>{a.name}</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
        </div>
            )
        })}
        

        {/* <div className='ven_details'>
        <img src={choice} alt='' className='choice'/>
        <div className='ven_name'>Choice Meal</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.7 <span className='ratings'>(500+)</span></span>
        </div>

        <div className='ven_details'>
        <img src={kobe} alt='' className='kobe'/>
        <div className='ven_name'>Kobe Delicious</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(374+)</span></span>
        </div>

        <div className='ven_details'>
        <img src={gidi} alt='' className='gidi'/>
        <div className='ven_name'>Gidi Grills</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(404+)</span></span>
        </div> */}

    </section>

    </Link> 

   


     <div className='mid_body'>

 <div className='other_text' >Other Vendors </div>
 
        <section className='four'>

<div className='ven_details'>
    <img src={iya} alt='' className='mama'/>
    <div className='ven_name'>Iya Skye Bukka Hut</div>
    <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
    </div>

    {/* <div className='ven_details'>
    <img src={tko} alt='' className='mama'/>
    <div className='ven_name'>TKO</div>
    <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
    </div>

    <div className='ven_details'>
    <img src={item} alt='' className='mama'/>
    <div className='ven_name'>Item 7 Meal</div>
    <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
    </div>

    <div className='ven_details'>
    <img src={anoint} alt='' className='mama'/>
    <div className='ven_name'>Anointing Bukka Spot</div>
    <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
    </div> */}


</section>
   
{/* 

    <section className='four'>

    <div className='ven_details'>
        <img src={odobe} alt='' className='mama'/>
        <div className='ven_name'>Odobe Bukka</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
        </div>

        <div className='ven_details'>
        <img src={crown} alt='' className='mama'/>
        <div className='ven_name'>Crown Meal</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
        </div>

        <div className='ven_details'>
        <img src={tega} alt='' className='mama'/>
        <div className='ven_name'>Tega Delicious</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
        </div>

        <div className='ven_details'>
        <img src={shop} alt='' className='mama'/>
        <div className='ven_name'>Shop 33 Plaza</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
        </div>


    </section> */}

     </div>

    </article>

         <Hotdeals/>


</main>

  )
}
export default Onboarding
