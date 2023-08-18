import React, { useState } from "react";
import boiledyam from "../images/boiledyam.png";
import omelette from "../images/omelette.png";
import scrambledeggs from "../images/scrambledeggs.png";
import hotbread from "../images/hotbread.png";
import { IoIosAdd } from "react-icons/io";
import englishbreakfast from "../images/englishbreakfast.png";
import Modal from "../Modal/Modal";

const Breakfast = () => {
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [Add, setAdd] = useState(false)
  // State End

  return (
    <div>
      <article className="bomelette">
        <section className="boiledyam">
          <div className="imaplus">
            <div>
              <img src={boiledyam} alt="" />
            </div>

            <div className="boiladd">
              <div className="boilcount">
                <span className="boiltext">Boiled Yam & Egg</span>
                <span className="tentext">10% Discount</span>
                <span className="sixhtext">&#8358;600.00</span>
              </div>
            </div>
          </div>

          <div>
            <div className="addicon" onClick={() => {}}>
              <IoIosAdd onClick={openModal} />
            </div>

            {/* <button>Open Modal</button> */}
            <Modal isOpen={modalOpen} className="modaler" onClose={closeModal}>
                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid red'}} className="top12">
                    <p className="vendorName1">Omelotte</p>
                    <button onClick={closeModal}>x</button>
                    <button onClick={() => setAdd(true)}>Add</button>
                </div>
                <img src={boiledyam} alt="" />
            </Modal>
          </div>
        </section>

        <section className="boiledyam">
          <div className="imaplus">
            <div>
              <img src={omelette} alt="" />
            </div>

            <div className="boiladd">
              <div className="boilcount">
                <span className="boiltext">Omelette</span>
                <span className="tentext">5% Discount</span>
                <span className="sixhtext">&#8358;600.00</span>
              </div>
            </div>
          </div>

          <div className="addicon">
            <IoIosAdd onClick={openModal} />
          </div>
        </section>

        <section className="boiledyam">
          <div className="imaplus">
            <div>
              <img src={scrambledeggs} alt="" />
            </div>

            <div className="boiladd">
              <div className="boilcount2">
                <span className="boiltext">Scrambled Egg</span>
                <span className="sixhtext">&#8358;600.00</span>
              </div>
            </div>
          </div>

          <div className="addicon">
            <IoIosAdd onClick={openModal} />
          </div>
        </section>

        <section className="boiledyam">
          <div className="imaplus">
            <div>
              <img src={hotbread} alt="" />
            </div>

            <div className="boiladd">
              <div className="boilcount2">
                <span className="boiltext">Hot bread</span>
                <span className="sixhtext">&#8358;600.00</span>
              </div>
            </div>
          </div>

          <div className="addicon">
            <IoIosAdd onClick={openModal} />
          </div>
        </section>

        <section className="boiledyam">
          <div className="imaplus">
            <div>
              <img src={englishbreakfast} alt="" />
            </div>

            <div className="boiladd">
              <div className="boilcount">
                <span className="boiltext">English Breakfast</span>
                <span className="tentext">5% Discount</span>
                <span className="sixhtext">&#8358;600.00</span>
              </div>
            </div>
          </div>

          <div className="addicon">
            <IoIosAdd onClick={openModal} />
          </div>
        </section>
      </article>
    </div>
  );
};

export default Breakfast;
