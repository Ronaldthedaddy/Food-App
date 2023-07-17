import React, { useState } from "react";
import boiledyam from "../images/boiledyam.png";
import omelette from "../images/omelette.png";
import scrambledeggs from "../images/scrambledeggs.png";
import hotbread from "../images/hotbread.png";
import { IoIosAdd } from "react-icons/io";
import englishbreakfast from "../images/englishbreakfast.png";
import Modal from "../Modal/Modal";
// import Modal from "../Modal/Modal";
import classes from "../Modal/style.modules.css";
// import { useState } from "react";

const Breakfast = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <article className="bomelette">
        <section className="boiledyam">
          <div>
            <img src={boiledyam} alt="" />
          </div>

          <div className="boiladd">
            <div className="boilcount">
              <span className="boiltext">Boiled Yam & Egg</span>
              <span className="tentext">10% Discount</span>
              <span className="sixhtext">&#8358;600.00</span>
            </div>

            <div>
              <div
                className="addicon"
                onClick={() => {
                  setShow(true);
                  // console.log(!show, 'modal open');
                }}
              >
                <IoIosAdd />
              </div>
              <Modal open={show}>
                <section className={classes.modalBackground}>
                  <div>
                    <button onClick={() => setShow(false)}>x</button>
                    hvgjfdyfgfjgfyjhfuhfktkydly8tioyiltukrjhydngsfngykuli9p97u68tyrjtgd
                  </div>
                </section>
              </Modal>
            </div>
          </div>
        </section>

        <section className="boiledyam">
          <div>
            <img src={omelette} alt="" />
          </div>

          <div className="boiladd">
            <div className="boilcount">
              <span className="boiltext">Omelette </span>
              <span className="tentext">5% Discount</span>
              <span className="sixhtext">&#8358;600.00</span>
            </div>

            <div className="addicon">
              <IoIosAdd />
            </div>
          </div>
        </section>

        <section className="boiledyam">
          <div>
            <img src={scrambledeggs} alt="" />
          </div>

          <div className="boiladd">
            <div className="boilcount">
              <span className="boiltext">Scrambled Egg</span>
              <span className="sixhtext">&#8358;600.00</span>
            </div>

            <div className="addicon">
              <IoIosAdd />
            </div>
          </div>
        </section>

        <section className="boiledyam">
          <div>
            <img src={hotbread} alt="" />
          </div>

          <div className="boiladd">
            <div className="boilcount">
              <span className="boiltext">Hot bread</span>
              <span className="sixhtext">&#8358;600.00</span>
            </div>

            <div className="addicon">
              <IoIosAdd />
            </div>
          </div>
        </section>

        <section className="boiledyam">
          <div>
            <img src={englishbreakfast} alt="" />
          </div>

          <div className="boiladd">
            <div className="boilcount">
              <span className="boiltext">English Breakfast</span>
              <span className="tentext">5% Discount</span>
              <span className="sixhtext">&#8358;600.00</span>
            </div>

            <div className="addicon">
              <IoIosAdd />
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Breakfast;
