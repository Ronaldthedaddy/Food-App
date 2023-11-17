import React from 'react'
import "./Navbar.css"
import tmlogo from "../images/tmlogo.png"
import notify from "../images/notify.png"
import bell from "../images/bell.png"
import adelekepic from "../images/adelekepic.png"
import ModalExample from "../Onboarding/Dropdown"
// import {AiOutlineSearch} from "react-icons/ai"
// import count from "../images/count.png"
// import notification from "../images/notification.png"
// import human from "../images/human.png"

export const Navbar = () => {
  return (
    
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




  )
}
export default Navbar