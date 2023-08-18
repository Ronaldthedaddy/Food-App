import React, {useState} from 'react'
import "./homeboarding.css"
import tmlogo from "../images/tmlogo.png"
import notify from "../images/notify.png"
// import star from "../images/star.png"
import bell from "../images/bell.png"
import TopVendors from './topvendors'
import OtherVendor from './othervendors'
import Hotdeals from '../Onboarding/Hotdeals'
import { Link } from 'react-router-dom'
// import riceback from "../images/riceback.png"

const Homeboarding = () => {
    const [topVendors, setTopVendors] = useState(true);
    const [otherVendors, setOtherVendors] = useState(false);
  return (
    <main>

        <header className='onboardhead'>
            <div><img src={tmlogo} className='onblogo' alt=''/></div>


                {/* <div className='placinup'> */}

                <div className='placehome'> 
                   <div className='placehomer'> <input className='homeput' type='input' placeholder='Search for Vendor'/> <button className='guton'>Search</button></div>
                </div>

            <div className='nolinup'>
                <div className='notifell'>
                    <div><img src={notify} alt=''/></div>
                    <div><img src={bell} alt=''/></div>
                </div>
                
                <Link to="/login" className='lignup'>LOGIN/SIGNUP</Link>
            </div>

                {/* </div> */}
           

        </header>

        <body className='bodyboard'>

            <section className='leftboard'>

                <div className='wttxtline'>
                    <div className='wttxt'>Welcome to TM30 Food Platform</div>
                    <div className="dashhline"></div>
                </div>
               
                <div className='tmealxt'>Tasty Meal</div>
                <div className='anyxt'>Anytime.</div>
                <div className='dfiwxt'>Delicious food is waiting for you</div>

                
            </section>


            <section className='rightboard'> </section>

        </body>

        <article>

            <div className='tother'>
                <div
                 onClick={() => {
                    setTopVendors(true);
                    setOtherVendors(false);
                  }}
                  style={{
                    background: topVendors ? "#36AAD9" : "",
                    color: topVendors ? "#fff" : "",
                    border: topVendors ? "none" : "",
                  }}
                className='topdors'>Top Vendors</div>

                <div 
                 onClick={() => {
                    setOtherVendors(true);
                    setTopVendors(false);
                  }}
                  style={{
                    background: otherVendors ? "#36AAD9" : "",
                    color: otherVendors ? "#fff" : "",
                    border: otherVendors ? "none" : "",
                  }}
                className='othors'>Other Vendors</div>
            </div>

            {/* <TopVendors/>
            <OtherVendor/> */}
            
                {topVendors && <TopVendors />}
                {otherVendors && <OtherVendor />}
               
                


        </article>

 <Hotdeals/>



    </main>
  )
}

export default Homeboarding