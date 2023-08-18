import React from 'react'
import "./ussdBankTransfer.css"
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebarr'
import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
import tmlogo from "../images/tmlogo.png"
import cibank from "../images/cibank.svg"

const ussdBankTransfer = () => {
  return (
    <main className='ussdOut'>
        <article className='sidebar2'>
        <Sidebar/> 
            <section className='ussdIn'>
          <Navbar/>

          <Link to="/checkout" className="backtop">
          <div>
            <img src={arrow} className="arrow" alt="" />
          </div>
          <div className="back">Back</div>
        </Link>

                <article className='logodivout'>

                        <section className='logodivin'>
                          
                          <div className='tmdiv'> <img src={tmlogo} className='tm' alt=''/> </div>

                          <article className='makefer'>
                            
                            <div className='maketext'>Make a transfer via USSD or bank transfer to <br/>the account below </div> 
                          
                          
                            <section className='banktails'>
                                      <article className='bankin'>
                                         <div className='bame'>Bank Name</div>
                                         <div className='hank'>Hope Bank</div>
                                      </article>

                                      <article className='bankin'>
                                         <div className='bame'>Account Number</div>
                                         <div className='hank'>2486937021</div>
                                      </article>

                                      <article className='bankin'>
                                        <div className='bame'>Account Name</div>
                                        <div className='hank'>TM30 Foodpay</div>
                                      </article>

                                      <article className='bankin'>
                                        <div className='bame'>Amount</div>
                                        <div className='hank'>&#8358;1,000.00</div>
                                      </article>
                                  </section>



                             <section className='usetime'>
                                <div className='usetext'>Use this account for this transaction only</div>
                                <div className='bankonit'><img src={cibank} alt=''/></div>
                                <div className='expext'> Expire in <div className='timer'>30:00</div></div>
                           </section>
                          </article>

                          <article className='sentout'>
                              <section  className='sentit'>
                                <div className='sentext'>I have sent the money</div>
                              </section>
                        </article>


                        {/* Don't code outside here */}
                        </section>
                </article>

            </section>

        </article>
        
    </main>
    )
}

export default ussdBankTransfer