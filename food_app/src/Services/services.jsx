import React from "react";
import "./services.css";
import blackman from "../images/blackman.png";
import trapezium from "../images/trapezium.png";
import networkprovs from "../images/networkprovs.png";
import airtime from "../images/airtime.png";
import data from "../images/data.png";
import electricity from "../images/electricity.png";
import cable1 from "../images/cable1.png";
import internet from "../images/internet.png";
import transfer from "../images/transfer.png";
import insurance from "../images/insurance.png";
import waec from "../images/waec.png";
import cable2 from "../images/cable2.png";
import others from "../images/others.png";
import Sidebar from "../Sidebar/Sidebarr";
import Navbar from "../Navbar/Navbar";

const services = () => {
  return (
    <main className="servicewhole">
      <article className="sidebar2">
        <Sidebar />
        <section className="navin">
          <Navbar />

          <div className="blackbuy">
            <div className="blackman">
              <img src={blackman} alt="" />
            </div>

            <div className="buypay">
              <div className="airtime">
                Buy Airtime, Data & Pay Utility bills
              </div>
              <div className="bills">
                Pay your bills in a stress- free manner.
              </div>
            </div>
          </div>

          <section className="manwoman">

              <div className="man">

                <div className="manin">
                     
                <div className="pyb">Pay your bills</div>

                    <div className="takeout">

                    <div className="tassle">Take the <span className="bluemen">hassle</span> </div>

                        <div className="tassle">out of bill payment with</div>

                         <div className="tassle">our <span className="bluemen">bill payment solutions.</span></div>


                    </div>
               
              </div>

                </div>
               
              <div className="woman">

                <div className="womanin">

                  <div className="trov">

                      <div className="trapezium" >
                        <img src={trapezium}alt="" />

                            <div className="buyprov">

                            <div className="solotimetext">
                                <div className="solobuytext">Buy</div>
                                <div className="buytimetext">Buy airtime <div>& data</div></div>
                            </div>
                            
                            <div><img src={networkprovs} className="networkimg" alt="" /></div>
                             

                            </div>
                           
                        
                      </div> 

                        
                            
                  </div>

                  <div className="womanphone">
                  </div>

                </div>

               
              </div>

          </section>


          <section className="buynet">

                <div className="buyone"><img src={airtime} alt=""/>
                
                    <div className="buytext">Buy Airtime</div>
                
                </div>

                <div className="buyone"><img src={data} alt=""/>
                
                    <div className="buytext">Buy Data</div>
                
                </div>

                <div className="buyone"><img src={electricity} alt=""/>
                
                    <div className="buytext">Buy Electricity</div>
                
                </div>

                <div className="buyone"><img src={cable1} alt=""/>
                
                    <div className="buytext">Cable TV</div>
                
                </div>

                <div className="buyone"><img src={internet} alt=""/>
                
                    <div className="buytext">Internet Service</div>
                
                </div>

          </section>




          
          <section className="buynet2">

                <div className="buyone"><img src={transfer} alt=""/>
                
                    <div className="buytext">Transfer Funds</div>
                
                </div>

                <div className="buyone"><img src={insurance} alt=""/>
                
                    <div className="buytext">Insurance</div>
                
                </div>

                <div className="buyone"><img src={waec} alt=""/>
                
                    <div className="buytext">WAEC Result <div>Checker</div></div>
                
                </div>

                <div className="buyone"><img src={cable2} alt=""/>
                
                    <div className="buytext">Cable TV</div>
                
                </div>

                <div className="buyone"><img src={others} alt=""/>
                
                    <div className="buytext">Others</div>
                
                </div>

          </section>





        </section>
      </article>
    </main>
  );
};

export default services;
