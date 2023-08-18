import React from "react";
import mastercard2 from "../images/mastercard2.png";
import visa2 from "../images/visa2.png";
import verve2 from "../images/verve2.png";
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";

const card = () => {
  return (
    <main className="mvvsout">
       
        <div className="mvvs">

        <div className="cardeckin">
        <img src={mastercard2} alt="" />
        <div className="enders">Ending in 2834</div>
      </div>

      <div className="cardeckin">
        <img src={visa2} className="visaimg" alt="" />
        <div className="enders">Ending in 2834</div>
      </div>

      <div className="cardeckin">
        <img src={verve2} alt="" />
        <div className="enders">Ending in 2834</div>
      </div>

      <div className="cardeckin">
        <img src={mastercard2} alt="" />
        <div className="enders">Ending in 2834</div>
      </div>

      <div className="cardeckin">
        <img src={visa2} className="visaimg" alt="" />
        <div className="enders">Ending in 2834</div>
      </div>

        </div>

        <div className="darrow">
        <div className="dscxt">Delete selected card</div>
        <div className="dscxt">
          <BsArrowRightShort className="aright" />
        </div>

        <div className="bincard">
          <div className="bincon">
            <HiOutlineTrash className="tricon"/>
          </div>
          <div className="dcxt">Delete Card</div>
        </div>
      </div> 

    </main>
  );
};

export default card;
