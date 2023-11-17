import React, { useState } from 'react'
import tmlogo from "../images/tmlogo.png"
import notify from "../images/notify.png"
import bell from "../images/bell.png"
import adelekepic from "../images/adelekepic.png"
import ModalExample from "../Onboarding/Dropdown"
import Styles from "./changepass.module.css"
import key from "../images/key.png"
// import changepass from "../images/changepass.png"
import {TbRefresh} from "react-icons/tb"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";


const ChangePassword = () => {

    const [inputPass, setInputPass] = useState("password");
    const [show, setShow] = useState(false);

    const handleShow = () => {
    setShow(!show);
    setInputPass(inputPass === "password" ? "text" : "password");
  };

      const [inputPassTwo, setInputPassTwo] = useState("password");
      const [showTwo, setShowTwo] = useState(false);

      const handleShowTwo = () => {
      setShowTwo(!showTwo);
      setInputPassTwo(inputPassTwo === "password" ? "text" : "password");
};

    const [inputPassThree, setInputPassThree] = useState("password");
    const [showThree, setShowThree] = useState(false);

    const handleShowThree = () => {
    setShowThree(!showThree);
    setInputPassThree(inputPassThree === "password" ? "text" : "password");
};

  return (
    <main>
        
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


        <body className={Styles.pwholeout}>
            <article className={Styles.pwholein}>

                <section className={Styles.ph1}>
                    
                <div className={Styles.pwhole}>
                    <div>
                        <div className={Styles.changext}>Change Password</div>
                        <div className={Styles.herext}>Here you can change your password</div>
                    </div>
                </div>

                    <body className={Styles.inputbod}>

                    <div className={Styles.cmail}>
                   <label className={Styles.cmailxt}>Current Password</label>
    
                    <div className={Styles.cputdiv2}>
                      <div className={Styles.cloput}>
                      <input className={Styles.cmput}
                        type={inputPass}
                        placeholder="Just to confirm it’s you"
                        />
                      </div>

                        <button className={Styles.cmeye} onClick={handleShow}>
                        {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
                      </button>
                    </div>
               </div>


               <div className={Styles.cmail}>
                   <label className={Styles.cmailxt}>New Password</label>
    
                    <div className={Styles.cputdiv2}>
                      <div className={Styles.cloput}>
                      <input className={Styles.cmput}
                        type={inputPassTwo}
                        />
                      </div>

                        <button className={Styles.cmeye} onClick={handleShowTwo}>
                        {showTwo ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
                      </button>
                    </div>
               </div>


               <div className={Styles.cmail}>
                   <label className={Styles.cmailxt}>Confirm Password</label>
    
                    <div className={Styles.cputdiv2}>
                      <div className={Styles.cloput}>
                      <input className={Styles.cmput}
                        type={inputPassThree}
                        />
                      </div>

                        <button className={Styles.cmeye} onClick={handleShowThree}>
                        {showThree ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
                      </button>
                    </div>
               </div>

                    <button className={Styles.changeout}>
                        <div className={Styles.changediv}>
                            <TbRefresh className={Styles.refresh}/>
                            <div className={Styles.passxt}>Change Password</div>
                        </div>
                    </button>

                    </body>
               




                </section>

                <section className={Styles.ph2}>
                    <img src={key} className={key} alt="" />
                </section>

            </article>
        </body>



    </main>
  )
}

export default ChangePassword