import React from 'react'
import Sidebar from '../Sidebar/Sidebarr'
import Navbar from '../Navbar/Navbar'
import tick from "../images/tick.png"
import "./paymentReceived.css"
import arrow from "../images/arrow.png";
import { Link } from 'react-router-dom'


const paymentReceived = () => {
  return (
   <main className='paywholeout'>
        <article className='sidebar2'>
            <Sidebar/>
                <section className='paywholein'>
                    <Navbar/>
            
                    <Link to="/checkout" className="backtop">
          <div>
            <img src={arrow} className="arrow" alt="" />
          </div>
          <div className="back"> Back</div>
        </Link>

                    <article className='payout'>
                        <section className='payin'>
                            <div className='tickess'>
                                <div className='tickon2'><img src={tick} className='tickimg' alt=''/></div>
                                <div className='succtext'>Success</div>
                                <div className='yourpay'>Your payment has been confirmed and you have successfully submitted your order.</div>
                                <Link to="/onboarding" className='menudiv'>
                                    <div className='menutext'>Go back to menu</div>
                                </Link>
                            </div>
                        










                        </section>
                    {/* Don't write outside this line */}
                    </article>
                </section>
        </article>
   </main>
  )
}

export default paymentReceived