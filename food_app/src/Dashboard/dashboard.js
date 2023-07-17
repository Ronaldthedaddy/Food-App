import React, { useState } from "react";
import "./dashboard.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebarr";
import dashback from "../images/dashnavback.png";
import dashstar from "../images/dashstar.png";
import dome from "../images/dome.png";
import SpecialOrder from "../specialOrder/specialOrder";
// import Default from "../Defaultt/Deft.";
import Defaults from "../Defaultt/defaultOrder";
// import waiter from "../images/waiter.png"
import { AiOutlineClockCircle } from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from "react-router-dom";

  const Dashboard = () => {

    const [Default, setDefault] = useState(true);
    const [Special, setSpecial] = useState(false);

 
  return (
    <main className="whole">
      <div className="sidebar2">
        <Sidebar />

        <div className="navbar2">
          <Navbar />

          <div className="dashback">
            {" "}
            <img src={dashback} className="dashbackpic" alt="" />{" "}
          </div>

          <article className="duo">
            <main className="both">
              <section className="leftduo">
                <div className="ordead">
                  <div className="ordeadoth">
                    <div className="orderout">
                      <div className="ortype">Select Order Type</div>
                      {/* <div className="orline"></div> */}
                      <div className="ordertype">
                        <div className="defspec">
                          <div
                           onClick={(()=>{
                            setDefault(true);
                            setSpecial(false);
                           })}
                           style={{
                            background:Default? "#36AAD9":"",
                            color:Default? "#fff":"",
                            border:Default?"none":"",
                           }}
                          className="deford">Default Order
                          </div>
                          <div 
                           onClick={(()=>{
                            setSpecial(true);
                            setDefault(false)
                           })}
                           style={{
                            background:Special? "#36AAD9":"",
                            color:Special? "#fff":"",
                            border:Special?"none":"",
                           }}
                          className="specord"
                          >Special Order</div>
                        </div>
                      </div>
                    </div>

                    <div className="deadout">
                      <div className="deadin">
                        <div className="calendar">
                          <div className="ate">8</div>
                          <div className="caline"></div>
                          <div className="camonth">May</div>
                        </div>

                        <div className="deays">
                          <div className="clead">
                            <div className="clock">
                              <AiOutlineClockCircle />
                            </div>
                            <div className="deadlinetext"> Deadline </div>
                          </div>
                          <div className="zerod">
                            0 Days : 2hrs : 48 min : 56 secs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="bukka2">
                  <div className="bukkontainer">
                    <div className="bukkontent">
                      <div className="mext">Mama J Bukka</div>
                      <div className="excext">Exceptional</div>

                      <div className="tastystar">
                        <div className="tastiner"> <div className="taxt">Tasty</div></div>
                        <div>
                          {" "}
                          <img src={dashstar} alt="" />{" "}
                        </div>
                        <div className="fournine">4.9</div>
                      </div>
                    </div>
                  </div>

                  <div className="vendome">
                    <div className="vext">Vendor</div>
                    <div>
                      <img src={dome} alt="" />
                    </div>
                  </div>
                </div>





                </div>

              



        {/* Navbar Section */}

      <div className="navout">

      <navbar className='navbard'>
       
       <div className='nav_searchd'>

       <div className='search_holderd'>
       <AiOutlineSearch className='searchicon'/>
       <input type="text" placeholder="Search in Mama J Bukka" className="search_inputd" />
       </div>

       </div>

   </navbar>

      </div>


            {/*Breafast/Lunch/Dinner Demacation  */}
    
          
          <article className="brunerout">

            <section className="brunerin">

            <div className="brext">Breakfast</div>
            <div className="lext">Lunch</div>
            <div className="
            dext">Dinner</div>

            </section>
           

          </article>
          
          {Special &&  <SpecialOrder/>}
            {Default && <Defaults/>}


                    

              </section>


                        {/*Right Side*/}

              <section className="rightduo">
                <div className="rightin">
                  <div>
                    <p className="ofrom">ORDER FROM</p>
                    <p className="bukext">Mama J Bukka</p>
                  </div>

                  <div className="waixt">
                    <div className="waimg">
                      <div className="nolook">
                        <span className="noxt">No Item Yet</span>

                        <div className="looder">
                          <span className="loxt">
                            Looks Like you haven't made your{" "}
                          </span>
                          <span className="loxt">order yet</span>
                        </div>
                      </div>
                      {/* <img src={waiter} className='waiter' alt=''/>  */}
                    </div>
                  </div>

                  <div className="cashira">
                    <span className="cashtext">Cashback</span>
                    <span className="naira">&#8358;1,000.00</span>
                  </div>

                  <div className="prout">
                    <Link to='/checkout' className="prext">PROCEED TO CASHOUT</Link>
                  </div>
                </div>
              </section>
            </main>
          </article>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
