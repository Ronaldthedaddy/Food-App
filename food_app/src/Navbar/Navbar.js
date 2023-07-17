import React from 'react'
import "./Navbar.css"
import {AiOutlineSearch} from "react-icons/ai"
import count from "../images/count.png"
import notification from "../images/notification.png"
import human from "../images/human.png"

export const Navbar = () => {
  return (
    
    <navbar className='navbar'>

  
    <div className='nav_search'>
            <div className='search_holder'>
            <AiOutlineSearch className='searchicon'/>
            <input type="text" placeholder="Search for anything" className="search_input" />
            </div>

    </div>

    <div className='nav_right'>

        <div className='countpart'>
        <img src={count} className='count' alt=""/>
        <img src={notification} className='notification' alt=""/>
        </div>

    </div>

    <div className='humanpeter'>
            <img src={human} className='human' alt=""/>

                <div className='peter' >
            <span className='adels'>Adeleke Peters</span>
            <span className='gmail' >Adelekepet@gmail.com</span>
                 </div> 

    </div>

    </navbar>




  )
}
export default Navbar