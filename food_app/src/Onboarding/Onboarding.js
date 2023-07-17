import React from 'react'
import "./Onboarding.css"
// import background from "../images/background.png"
// import searchicon from "../"images/searchicon.png"

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
import anoint from "../images/anoint.png"
import item from "../images/item.png"
import tko from "../images/tko.png"
import odobe from "../images/odobe.png"
import crown from "../images/crown.png"
import tega from "../images/tega.png"
import shop from "../images/shop.png"
import shake from "../images/shake.png"
import fire from "../images/fire.png"
import chef from "../images/chef.png"
import foodie from "../images/foodie.png"
import chat from "../images/chat.png"
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

// import eclipse1 from "../images/eclipse1.png"
// import eclipse2 from "../images/eclipse2.png"

import IG from "../images/IG.png"
import FB from "../images/FB.png"
import twitter from "../images/twitter.png"
import { Link } from 'react-router-dom'
// import hotdeals from "../images/hotdeals.png"


export const Onboarding = () => {
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
        <div className='ven_details'>
        <img src={mama} alt='' className='mama'/>
        <div className='ven_name'>Mama J Bukka</div>
        <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
        </div>

        <div className='ven_details'>
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
        </div>

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

    <div className='ven_details'>
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
    </div>


</section>
   


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


    </section>

     </div>



    </article>

            {/* Hot Deals */}
        <div className='hotdeals_section'> 
{/* 
        <div className='eclipse'>

        <div className='eclipse1'> <img src={eclipse1} className='eclipse1_img' alt=''/></div>
        <div className='eclipse2'> <img src={eclipse2} className='eclipse2_img' alt=''/></div>

        </div> */}
        

            <div className='hotdeals'>

                
        <div className='hd'>
        <p>

            <div className='fireline'>
             <img src={fire} className='fire' alt=''/> 
             <span className='firespan'>

                Hot Deals <div className="line"></div>
                </span> 

            </div>
           
           <br/>
            <div className='content'>

            <div className='con1'>
            <button>Fast food</button>
            <button>Pastries</button>
            <button>Breakfast</button>
            <button>Tasty</button>
            <button>Traditional</button>
            </div>

            <div className='con2'>
            <button>Peppersoup</button>
            <button>Local food</button>
            <button>Pasta</button>
            <button>Finger food</button>
            <button>Lunch</button>
            </div>

            </div>

            </p>
        </div>

            </div>


        </div>

            <div>
                 <img src={shake} className='shake' alt=''/>
                </div>
        
        
            <div className='chef_foodie'>
        
                <div className='chef'> 
                    <img src={chef} className='chefpic' alt=''/>
                    
                    <div className='bvex'>

                    <p className='bvr'>Become a Vendor</p>
                    <p className='expand'>Expand your food sales and get more customer.</p>
                    <div className='sign'>Sign up</div>

                    </div>

                </div>
                
                <div 
                className='chef'>
                    <img src={foodie} className='foodiepic' alt=''/>
                    
                    <div className='bvex'>

                    <p className='bvr'>Register your Company</p>
                    <p className='expand'>Easy way to order delicious food for their staff</p>
                    <div className='sign'>Sign up</div>

                    </div>
                </div>
        
        
            </div>
        
        <section className='all_table'>
            
            <div className='table'>

            <ul>
                <li className='head'>Places</li>
                <li>Lagos</li>
                <li>Abuja</li>   
                <li>Ibadan</li>   
                <li>Lekki - Lagos</li>   
                <li>Island - Lagos</li>   
                <li>Mainland - Lagos</li>   
                <li>Victoria Island - Lagos</li>   
                <li>Ikoyi - Lagos</li>   
            </ul>

            </div>

            
            <div className='table'>

            <ul>
                <li className='head'>Culinary Art</li>
                <li>Nigerian Food</li>
                <li>Pasta</li>
                <li>African Food</li>
                <li>Sandwiches</li>
                <li>Pizza</li>
                <li>Breakfast </li>
                <li>Traditional </li>
            </ul>

            </div>
            
            <div>
                <ul>
                    <li className='head'>Popular Vendor</li>
                    <li>Mama J Bukka</li>
                    <li>Choice Meal</li>
                    <li>Kobe delicious</li>
                    <li>Gidi Grills</li>
                    <li>Item 7 Meal</li>
                    <li>Iya Skye Bukka Hut</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className='head'>Collaboration</li>
                    <li>Sell on TM30 Food Platform</li>
                    <li>Order for your Company staffs</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className='head'>TM30 Food Platform</li>
                    <li>About</li>
                    <li>Help page</li>
                    <li>Help page</li>
                    <li>Privacy policy</li>

                    <li className='head2'>Connect with us</li>
                    <li className='special'><img src={IG} alt=''/>Instagram</li>
                    <li className='special'><img src={twitter} alt=''/>Twitter</li>
                    <li className='special'><img src={FB} alt=''/>Facebook</li>
                    
                   
                </ul>
            </div>


    </section>
       
       <footer className='footer'>
       
        <div className='copyright'>
        <AiOutlineCopyrightCircle/> 2023 TM30 Food Platform All rights reserved
        </div>

        <div className='chatdiv'>
            <img src={chat} className='chat' alt=''/> <div className='chaxt'> Chat with us</div>
        </div>

       </footer>


</main>

  )
}
export default Onboarding
