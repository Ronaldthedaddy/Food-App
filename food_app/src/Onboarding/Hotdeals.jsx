import React from 'react'
import shake from "../images/shake.png"
import fire from "../images/fire.png"
import chef from "../images/chef.png"
import foodie from "../images/foodie.png"
import chat from "../images/chat.png"
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import IG from "../images/IG.png"
import FB from "../images/FB.png"
import twitter from "../images/twitter.png"

const Hotdeals = () => {
  return (
    <main className='all_for_one'>

   {/* Hot Deals */}
   <div className='hotdeals_section'> 

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

                 <div className='shake'>
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

export default Hotdeals