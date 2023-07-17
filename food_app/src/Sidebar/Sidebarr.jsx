import React from 'react'
import "./sidebar.css"
import tmlogo from "../images/tmlogo.png"
import {LuLayoutDashboard} from "react-icons/lu"
import {TfiWorld} from "react-icons/tfi"
import {CiSettings} from "react-icons/ci"
import {BiLogOut} from "react-icons/bi"
import { Link } from 'react-router-dom'
// import {} from "react-icons/"


const Sidebar = () => {
    const Maptwo =[
        {
            Name:"Settings",
            Icon:<CiSettings/>,
            className:"Sidebar-serve",
            path: "/settings",

        },
        {
            Name:"Logout",
            Icon:<BiLogOut/>,
            className:"Sidebar-serve",
        },
    ]
    const Map =[
        {
            Name:'Dashboard', 
            Icon: <LuLayoutDashboard/>,
            className:"Sidebar-serve",
            path:"/dashboard"

        },
        {
            Name: 'Services',
            Icon: <TfiWorld/>,
            className:"Sidebar-serve",
            path:"/services"
        }
    ]
  return (
     <main>
     <img src={tmlogo}  alt="" className='ontmlogo'/>
         <section className='iconname'>
         {Map.map((Dash)=>{
           return(
        
               <Link  to={Dash.path} >
                <div
                className={Dash.className}
                style={{
                    background: `${window.location.pathname === Dash.path ? "#36AAd9" : ""}`,
                    color:`${window.location.pathname === Dash.path ? "white" : ""}`,
                    borderRadius:`${window.location.pathname === Dash.path ? "10px" : ""}`
                }}
                >
               {Dash.Icon}
               {Dash.Name}
                </div>
            
               </Link>
   
           )
        })}
         </section>
   
        <section className='iconname2'>
            {Maptwo.map((Dashtwo)=>{
                return(
                    <Link to= {Dashtwo.path }>
                      <div 
                    className={Dashtwo.className}
                    
                    >
                    {Dashtwo.Icon}
                    {Dashtwo.Name}
                    </div>
                    
                    </Link>
                  
                    
                )
            })}
        </section>




     </main>

    // <main>
    //     <div>
    //     {/* style={{width:'20px'}} */}
    // <img src={tmlogo}  alt="" className='ontmlogo'/>
    //  </div>

    // <div className='dashboard'>
    //     <LuLayoutDashboard/>
    // </div>

    // <div>
    // <TfiWorld/>
    // </div>

    // <div>
    //     <IoSettingsOutline/>
    // </div>

    // </main>
    
  )
}

export default Sidebar