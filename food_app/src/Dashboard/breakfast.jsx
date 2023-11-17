import React, { useState } from "react";
import boiledyam from "../images/boiledyam.png";
import omelette from "../images/omelette.png";
import scrambledeggs from "../images/scrambledeggs.png";
import hotbread from "../images/hotbread.png";
import { IoIosAdd } from "react-icons/io";
import englishbreakfast from "../images/englishbreakfast.png";
import Modal from "../Modal/Modal";
import Counter from "./Counter";
import clear from "../images/clear.png"

const Breakfast = () => {
  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  // const [Add, setAdd] = useState(false)
  // State End

  const Drinks = [
    {
      Name:"Coke",
    },
    {
      Name:"Pepsi"
    },
    {
      Name:"Fanta"
    },
    {
      Name:"Sprite"
    },
  ];

  const protein = [
    {
      Name:"Plantain"
    },
    {
      Name:"Turkey"
    },
    {
      Name:"Beef"
    },
    {
      Name:"Chicken"
    },
    {
      Name:"Fish"
    },
    {
      Name:"Egg"
    },
  ]

  
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

                <div className="top12">
                    <div className="vendorName1">Boiled Yam & Egg</div>
                    <button className="xmspot" onClick={closeModal}>x</button>
                </div>

                <section className="boil4h">
                  <div className="pic4h">
                  <img src={boiledyam} alt="" />
                  <div className="break4h">&#8358;400.00</div>
                  </div>

                  <div><Counter/></div>

                </section>

                <article className="takequired">
                  <div className="takewayxtt">Takeaway Pack</div>
                  <div className="reqxtt">Required</div>
                </article>

                <div className="yourstras">YOUR EXTRAS</div>


              <section className="prodrink">
                <article className="addprotein">
                  <div className="addpd">ADD PROTEIN TO YOUR MEAL</div>

                  
                    {protein.map((T)=>{
                      return(
                        <section className="radra">
                         
                            <div className="radtname">
                             <input type="radio" />
                             <span className="tname">{T.Name}</span>
                            </div>

                          <span className="nairaz">
                            <div className="price4h">&#8358;400.00</div>
                            <div><Counter/></div>
                          </span>

                        </section>
                      )
                    })}
                    
                  </article>



                   <article className="adrink">
                      <div className="addpd">ADD A DRINK?</div>
                      {Drinks.map((t)=>{
                        return(
                          <section className="radra">
                         
                          <div className="radtname">
                           <input type="radio" />
                           <span className="tname">{t.Name}</span>
                          </div>

                        <span className="nairaz">
                          <div className="price4h">&#8358;400.00</div>
                          <div><Counter/></div>
                        </span>

                      </section>
                        )
                      })}
                  </article>

              </section>


                    <section className="clallxt">
                      <div className="clearpcxt">
                        <div><img src={clear} alt="" className="clearpic" /></div>
                        <div>Clear all</div>
                      </div>

                      <section className="addtoxtdiv">
                        <div className="addtoxtt">ADD TO ORDER</div>
                        <div className="k8xt">&#8358;2,800.00</div>
                      </section>

                    </section>
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
