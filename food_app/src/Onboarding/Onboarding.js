import React, { useState } from 'react'
import "./Onboarding.css"
import tmlogo from "../images/tmlogo.png"
import notify from "../images/notify.png"
import bell from "../images/bell.png"
import TopVendors from '../Homeboarding/topvendors'
import OtherVendor from '../Homeboarding/othervendors'
import Hotdeals from '../Onboarding/Hotdeals'
import adelekepic from "../images/adelekepic.png"
import ModalExample from './Dropdown'
// import axios from 'axios'




 const Onboarding = () => {

  const [topVendors, setTopVendors] = useState(true);
  const [otherVendors, setOtherVendors] = useState(false);

  // const [vendor, setVendor] = useState([]);
  const gettoken = localStorage.getItem("Token");
  console.log(gettoken)
  localStorage.getItem(gettoken)

    // const Vendors = [{
    //     name: "Mama J Bukka",
    //     image: mama
    // },{
    //     name: "Choice Meal",
    //     image: choice

    // },{
    //     name:"Kobe Delicious",
    //     image: kobe
    // },{
    //     name: "Gidi Grills",
    //     image: gidi
    // }]

// const config = {
//   headers: {
//     Authorization: `Bearer ${gettoken}`,
//   },
// };
// const Url = "http://89.38.135.41:7654/api/users/dashboard";
// useEffect( () => {
//   axios
//   .get(Url, config)
//   .then(function (response) {
//     // setVendor(response.data.data);
//     // console.log(response.data.data);
//   })
//   .catch(function (error) {
//     console.log("Error:", error);
//   });
// }, );


  return (

<main className='all_for_one'>

   
    <header className='onboardhead'>
            <div><img src={tmlogo} className='onblogo' alt=''/></div>



                <div className='placehome'> 
                   <div className='placehomer'> <input className='homeput' type='input' placeholder='Search for Vendor'/> <button className='guton'>Search</button></div>
                </div>

            <div className='nolinup'>
                <div className='notifell'>
                    <div><img src={notify} alt=''/></div>
                    <div><img src={bell} alt=''/></div>
                </div>
                

                <div className='ligndiv'>
                  <img src={adelekepic} alt="" />
                     <div className='lign30'>
                        <div className='lignup2'>Adeleke Peters</div>

                        <div className='tm30xt'>TM30 Staff
                            <ModalExample/>
                        </div>
                     </div>
                </div>
            </div>
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

            
                {topVendors && <TopVendors />}
                {otherVendors && <OtherVendor />}
               
                


        </article>

 <Hotdeals/>




</main>

  )
}
export default Onboarding
