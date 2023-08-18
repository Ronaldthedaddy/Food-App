import React, { useState } from "react";
import "./settings.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebarr";
import Card from "./card";
import Addcard from "./Add";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye, } from "react-icons/ai";
import {MdOutlineChangeCircle} from "react-icons/md"

// import {PiTrashDuotone} from "react-icons/pi"

const Settings = () => {
  const [inputPassThree, setInputPassThree] = useState("password");
  const [showThree, setShowThree] = useState(false);

  const handleShowThree = () => {
    setShowThree(!showThree);
    setInputPassThree(inputPassThree === "password" ? "text" : "password");
  };

  const [inputPassFour, setInputPassFour] = useState("password");
  const [showFour, setShowFour] = useState(false);

  const handleShowFour = () => {
    setShowFour(!showFour);
    setInputPassFour(inputPassFour === "password" ? "text" : "password");
  };

  const [inputPassFive, setInputPassFive] = useState("password");
  const [showFive, setShowFive] = useState(false);

  const handleShowFive = () => {
    setShowFive(!showFive);
    setInputPassFive(inputPassFive === "password" ? "text" : "password");
  };

  const [card, setCard] = useState(true);
  const [addNewCard, setaddNewCard] = useState();

  return (
    <main className="settingswholeout">
      <article className="sidebar2">
        <Sidebar />
        <section className="settingswholein">
          <Navbar />
          <article className="settingsout">
            <section className="settingsin">
              {/*  Code beneath or inside this section */}

              <article className="changewallet">
                {/* Change password section */}
                <section className="change">
                  <div>
                    <div className="changordxt">Change Password</div>
                    <div className="hycordxt">Here you can change your password</div>
                  </div>

                    <article className="chanewfirm">
                     <div className="currord">
                      
                      <label className="currordxt"> Current password</label>
                        <div className="placeholder3">
                          <input
                            className="input3"
                            type={inputPassThree}
                            placeholder="Just to confirm it’s you"
                          />
                          <button className="eye3" onClick={handleShowThree}>
                            {showThree ? (
                              <AiOutlineEyeInvisible />
                            ) : (
                              <AiOutlineEye />
                            )}{" "}
                          </button>
                        </div>
                      </div>
                    
                    <div className="currord">
                      <label className="currordxt">New Password</label>
                        <div className="placeholder3">
                          <input
                            className="input4"
                            type={inputPassFour}
                            placeholder="**************"
                          />
                          <button className="eye3" onClick={handleShowFour}>
                            {showFour ? (
                              <AiOutlineEyeInvisible />
                            ) : (
                              <AiOutlineEye />
                            )}
                          </button>
                        </div>
                    </div>


                    <div className="currord">
                      <label className="currordxt">Confirm Password</label>
                        <div className="placeholder3">
                          <input
                            className="input4"
                            type={inputPassFive}
                            placeholder="**************"
                          />
                          <button className="eye3" onClick={handleShowFive}>
                            {showFive ? (
                              <AiOutlineEyeInvisible />
                            ) : (
                              <AiOutlineEye />
                            )}
                          </button>
                        </div>
                    </div>
                  

                    <button className="changbtn"> 
                     <div className="chancon"><MdOutlineChangeCircle/></div>
                     <div className="chandxt">Change Password</div>
                    </button>
                        
                    </article>
                  
                </section>


                {/* Wallet section */}

                <section className="wallet">
                  <div className="walxt">Wallet</div>

                  <Link className="cardnew">
                    <div
                      className="cardxt"
                      onClick={() => {
                        setCard(true);
                        setaddNewCard(false);
                      }}
                      style={{
                        color: setCard ? "#36AAD9" : "",
                        borderBottom: setCard ? "3px solid #36AAD9" : "",
                      }}
                    >
                      Card
                    </div>

                    <div
                      className="ncardxt"
                      onClick={() => {
                        setCard(false);
                        setaddNewCard(true);
                      }}
                      style={{
                        color: setaddNewCard ? "#36AAD9" : "",
                        borderBottom: setaddNewCard ? "3px solid #36AAD9" : "",
                      }}
                    >
                      Add New Card
                    </div>
                  </Link>

                  {card && <Card />}
                  {addNewCard && <Addcard />}
                </section>
              </article>
              {/* Don't code outside this section */}
            </section>
          </article>
        </section>
      </article>
    </main>
  );
};

export default Settings;
