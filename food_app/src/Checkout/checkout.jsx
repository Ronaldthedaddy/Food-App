import React from "react";
import "./checkout.css";
import Sidebar from "../Sidebar/Sidebarr";
import Navbar from "../Navbar/Navbar";
import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
import {MdPhoneAndroid} from "react-icons/md"
import {RiBankFill} from "react-icons/ri"
import mastercard from "../images/mastercard.png"
import verve from "../images/verve.png"
import visa from "../images/visa.png"



const checkout = () => {
  return (
    <main className="servicewhole">
      <article className="sidebar2">
        <Sidebar />

        <section className="navin">
          <Navbar />

          <Link to="/dashboard" className="backtop">
          <div>
            <img src={arrow} className="arrow" alt="" />
          </div>
          <div className="back"> Back</div>
        </Link>


        <article className="wholeorder">

          <div className="wholeorderin">

            
          <section className="ordermethod">
               <div className="ormary">ORDER SUMMARY</div>

            <div className="totalten">
              <div className="topay">Total to pay</div>
              <div className="onekay1">&#8358;1,000.00</div>
            </div>
             
            </section>


             <section className="choosecard">

                <div className="choothod">CHOOSE A PAYMENT METHOD</div>

                <div className="radcon">
                     <Link to= '/ussdBankTransfer' className="rad1"> <input type="radio"/>Pay with USSD or Bank Transfer</Link>

                       <div className="phonebank">
                          <div ><MdPhoneAndroid/></div>
                          <div><RiBankFill/></div>
                     </div>
                </div>


                <div className="pard">

                     <div className="radcon2">

                      <Link to= '/cardPayment' className="rad2"><input type="radio"/>Pay with Card</Link>

                      <div className="masterverve">
                        <div> <img src={mastercard} alt=""/> </div>
                        <div> <img src={visa} alt=""/> </div>
                        <div>  <img src={verve} alt=""/> </div>
                      </div>

                     </div>

                </div>
                

             </section>


             <section className="prokay">

                  <div className="propay">Proceed to pay </div>
                  <div className="onekay2">&#8358;1,000.00</div>

             </section>

          </div>

        </article>

        </section>
      </article>
    </main>
  );
};

export default checkout;
