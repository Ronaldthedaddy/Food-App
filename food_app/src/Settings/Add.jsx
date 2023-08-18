import React from 'react'
// import { Link } from 'react-router-dom';
import {FiChevronDown} from "react-icons/fi";
import {IoMdCard} from "react-icons/io";
import minimast from "../images/minimast.png";
import {RxPerson} from "react-icons/rx";


const Newcard = () => {
  return (
    <main>
       <section className='nameber'>
                        <div className='nameberin'>
                          <div className='namon'>Name on the card</div>
                              <div className='outlabel'>
                                 <RxPerson className='rxperson'/>
                                 <input type='label' placeholder='Enter the name on the card' className='label'/>
                              </div> 
                        </div> 

                        <div className='nameberin'>
                          <div className='namon'>Card Number</div>
                              <div className='outlabel2'> 
                                <img src={minimast} className='minimast' alt=''/>
                                <FiChevronDown/>
                                <input type='label' placeholder='xxxx xxxx xxxx xxxx' className='label'/>
                              </div>
                        </div>
                      </section>


                      <section className='explet'>

                        <div className='expcvc'>

                            <div>
                              <div className='exate'>Expiry date</div>
                              <div className='dativ'><input type='date'className='label'/></div>
                            </div>

                            <div>
                              <div className='exate'>CVC</div>
                              <div className='dativ2'><IoMdCard/> <input type='label' placeholder='xxx' className='label2'/></div>
                            </div>

                        </div>
                       
                      </section>

                          <div className='adardout'>
                      <button className='adard'> Add Card</button>
                          </div>
    </main>
  );
};

export default Newcard;