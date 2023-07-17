import React from "react";
import "./defaultOrder.css";
import spork from "../images/spork.png";
import { AiOutlineCheck } from "react-icons/ai";

const Deft = () => {
  return (
    <main className="defaultcont">
      <article className="defaultin">
        <section className="deforder">
          <div>
            <img src={spork} alt="" />
          </div>

          <div>
            <div className="defaux">Default</div>
            <div className="enjex">Enjoy your default order with us!</div>
          </div>
        </section>
        <div className="checkicon"><AiOutlineCheck/></div>
      

      </article>

    </main>
  );
};

export default Deft;
