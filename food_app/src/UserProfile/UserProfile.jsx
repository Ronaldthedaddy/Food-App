import React from 'react'
import "./userprofile.css"
import tmlogo from "../images/tmlogo.png"
import notify from "../images/notify.png"
import bell from "../images/bell.png"
import adelekepic from "../images/adelekepic.png"
import ModalExample from "../Onboarding/Dropdown"
import changepp from "../images/changepp.png"
import deletepp from "../images/deletepp.png"


const UserProfile = () => {
  return (
    <main className='userprofwholeout'>
       
       <header className='onboardheadz'>

<div className='nolinupz'>
        <div>
          <img src={tmlogo} className='onblogoz' alt=''/>  
        </div>

        <article className="notilign">
          <div className='notifellz'>
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
        </article>

</div>
</header>

        <section className='userprofwholein'>

                 <article className='profilein'>
                         <article className='welterxt'>
                            <div className='hiprofxt'>
                               <div className='hpxt'>Hi Peters</div>
                               <div className='wtypxt'>Welcome to your Profile!</div>
                            </div>

                            <div className='picxr'>
                                <div className='adelsxtt'>Adeleke Peters</div>
                                <img src={adelekepic} alt="" />
                            </div>
                         </article>

                         <article className='adidiv'>
                            
                            <section className='adidiv1'>
                                <div className='adidiv2'>
                                    <img src={adelekepic} className='adelekepic6' alt="" />
                                    <div className='tm3xt'>TM30 Staff</div>
                                </div>

                                <div className='adidiv3'>
                                    <div className='adidiv4'>
                                        <img src={changepp} alt="" />
                                        Change profile picture
                                    </div>

                                    <div className='adidiv4'>
                                        <img src={deletepp} alt="" />
                                        Delete profile picture
                                    </div>
                                </div>
                            </section>

                            <body className='allbodout'>

                            <section className='flxt'>
                                <div className='flekxt'>
                                     <div className='flepxt'>First Name</div>
                                     <div className='apanxt'>Adeleke</div>
                                </div>

                                <div className='lpext'>
                                     <div className='flepxt'>Last Name</div>
                                     <div className='apanxt'>Peters</div>
                                </div>
                            </section>




                            <section className='enoxt'>
                                 <div className='flekxt'>
                                     <div className='flepxt'>Email Address</div>
                                     <div className='apanxt'>Adelekepeters@yahoo.com</div>
                                </div>

                                <div className='lpext'>
                                     <div className='flepxt'>Phone Number</div>
                                     <div className='apanxt'>0901234578</div>
                                </div>
                            </section>

                            </body>
                           

                         </article>

                         <button className='efilout'>
                         <div className='efilxt'>Edit Profile </div>
                         </button>

                 </article>
        </section>
      

    </main>
  )
}

export default UserProfile