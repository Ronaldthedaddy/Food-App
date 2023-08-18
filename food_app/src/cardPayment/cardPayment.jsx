import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebarr'
import "./cardPayment.css"
import arrow from "../images/arrow.png";
import visa2 from "../images/visa2.png";
import mastercard2 from "../images/mastercard2.png";
import verve2 from "../images/verve2.png";
import minimast from "../images/minimast.png";
import {RxPerson} from "react-icons/rx";
import {FiChevronDown} from "react-icons/fi";
import {IoMdCard} from "react-icons/io";


import { Link } from "react-router-dom";


const cardPayment = () => {
  return (
    <main className='cardwholeout'>
        <article className='sidebar2'>
        <Sidebar/> 
            <section className='cardwholein'>
          <Navbar/>

          <Link to="/checkout" className="backtop">
          <div>
            <img src={arrow} className="arrow" alt="" />
          </div>
          <div className="back"> Back</div>
        </Link>

               <article className='cardout'>
                 <div className='proment'>Process your order payment</div>
                 <div className='kindext'>Kindly pay with your card and payment confirmation may take up to 2 minutes</div>


                  <article className='cardin'>

                      <section className='wallext'>Wallet</section>
                      
                      <section className='cardeck'>
                        <div className='cardeckin'>
                          <img src={mastercard2} alt=''/>
                          <div className='enders'>Ending in 2834</div>
                        </div>

                        <div className='cardeckin'>
                          <img src={visa2} className='visaimg' alt=''/>
                          <div className='enders'>Ending in 2834</div>
                        </div>

                        <div className='cardeckin'>
                          <img src={verve2} alt=''/>
                          <div className='enders'>Ending in 2834</div>
                        </div>
                      </section>

                      <div className='newline'>
                      <div className='newext'>New Card</div>
                      <div className='cardline'></div>
                      </div>
                      

                      <section className='nameber'>
                        <div className='nameberin'>
                          <div className='namon'>Name on the card</div>
                              <div className='outlabel'>
                                 <RxPerson className='rxperson'/>
                                 <input type='label' placeholder='Enter the name on the card' className='label'/>
                              </div> 
                        </div> 

                        <div className='nameberin'>
                          <div className='namon'>Card Number</div>
                              <div className='outlabel2'> 
                                <img src={minimast} className='minimast' alt=''/>
                                <FiChevronDown/>
                                <input type='label' placeholder='xxxx xxxx xxxx xxxx' className='label'/>
                              </div>
                        </div>
                      </section>


                      <section className='explet'>

                        <div className='expcvc'>

                            <div>
                              <div className='exate'>Expiry date</div>
                              <div className='dativ'><input type='date'className='label'/></div>
                            </div>

                            <div>
                              <div className='exate'>CVC</div>
                              <div className='dativ2'><IoMdCard/> <input type='label' placeholder='xxx' className='label22'/></div>
                            </div>

                        </div>
                       

                        <div>
                          <div></div>
                          <div  className='dativ3'><input type='checkbox'/> Add card to wallet</div>
                        </div>
                      </section>

                      <section className='contentout'>
                          <Link to="/submitcard" className='contentin'>
                              <div className='context'>Continue payment</div>
                         </Link>
                      </section>


                  </article>

               </article>

            </section>

        </article>
        
    </main>
  )
}

export default cardPayment