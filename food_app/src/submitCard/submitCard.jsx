import React from 'react'
import "./submitcard.css"
import Sidebar from '../Sidebar/Sidebarr'
import Navbar from '../Navbar/Navbar'
import {BsArrowRightShort} from "react-icons/bs"
import { Link } from 'react-router-dom'
import tick from "../images/tick.png"

const submitCard = () => {
  return (
    <main className='subwholeout'>
        <article className='sidebar2'>
            <Sidebar/>
                <section className='subwholein'>
                    <Navbar/>
                        <article className='submitout'>
                            <section className='submitin'>
                                 <div className='tickon'><img src={tick} className='tickmg' alt=''/></div>
                                 <div className='payceived'>Payment Received</div>
                                 <div className='wevment'>We’ve received your<span className='onespan'> ₦1,000.00 </span> payment</div>
                                 <div className='payls'>PAYMENT DETAILS</div>
                                
                                <section className='paymid'>

                                         <div className='paymidin'>
                                             <div className='pay1'>Payment amount</div>
                                             <div className='pay2'>₦1,000.00</div>
                                         </div>

                                         <div className='paymidin'>
                                             <div className='pay1'>Payment date</div>
                                             <div className='pay2'>May 18,2023</div>
                                         </div>

                                         <div className='paymidin'>
                                             <div className='pay1'>Payment Method</div>
                                             <div className='pay2'>Transfer - ending *9738</div>
                                         </div>

                                         <div className='paymidin'>
                                             <div className='pay1'>Confirmation ID</div>
                                             <div className='pay2'>B24578AE</div>
                                         </div>

                                </section>

                                <Link to="/paymentreceived" className='contentin'>
                                     <div className='context'>Proceed to submit <BsArrowRightShort className='aright'/></div>
                                </Link>


                            </section>
                            
                            
                         </article>
                    {/* Don't write outside this line */}
                </section>
        </article>
    </main>
  )
}

export default submitCard