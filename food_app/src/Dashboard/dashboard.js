// import React, { useState } from "react";
import "./dashboard.css";
import Carousel from "./Carousel/carousel";
// import dashback from "../images/dashnavback.png";
import dashstar from "../images/dashstar.png";
import dome from "../images/dome.png";
import tmlogo from "../images/tmlogo.png"
import notify from "../images/notify.png"
import bell from "../images/bell.png"
import adelekepic from "../images/adelekepic.png"
import ModalExample from "../Onboarding/Dropdown"
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import SpecialOrder from "../specialOrder/specialOrder";

// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebarr";
// import SpecialOrder from "../specialOrder/specialOrder";
// import Defaults from "../Defaultt/defaultOrder";


const Dashboard = () => {
  // const [Default, setDefault] = useState(true);
  // const [Special, setSpecial] = useState(false);

  // const [data, setData] = useState([]);
  
  //   useEffect(() => {

  //     // Make a GET request to the API
  //     axios.get('http://89.38.135.41:7654/api/items/category/147626d5-db63-4903-879d-9fea21773f85')
  //       .then(response => {
  //         setData(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  //   }, []);


  return (
    <main className="whole">

        <article className="wholein">

        <header className='onboardheadz'>

            <div className='nolinupz'>
                    <div>
                      <img src={tmlogo} className='onblogoz' alt=''/>  
                    </div>

                    <article className="notilign">
                      <div className='notifellz'>
                         <div><img src={notify} alt=''/></div>
                         <div><img src={bell} alt=''/></div>
                     </div>

                     <div className='ligndiv'>
                         <img src={adelekepic} alt="" /> 
                            <div className='lign30'>
                               <div className='lignup2'>Adeleke Peters</div> 
                               <div className='tm30xt'>TM30 Staff
                                   <ModalExample/>
                               </div>
                            </div>
                     </div>
                    </article>

            </div>
        </header>


          <div className="dashback">
            <div className="dashbackpic"></div>
            {/* <img src={dashback}  alt="" />{" "} */}
          </div>

          <article className="duo">
            <main className="both">
              <section className="leftduo">
                <div className="ordead">
                  <div className="ordeadoth">
                      <div className="caroutt">
                        <Carousel className="caroupic" />
                      </div>
                  </div>

                  <div className="bukka2">
                    <div className="bukkontainer">
                      <div className="bukkontent">
                        <div className="mext">Mama J Bukka</div>
                        <div className="excext">Exceptional</div>

                        <div className="tastystar">
                          <div className="tastiner">
                            {" "}
                            <div className="taxt">Tasty</div>
                          </div>
                          <div>
                            {" "}
                            <img src={dashstar} alt="" />{" "}
                          </div>
                          <div className="fournine">4.9</div>
                        </div>
                      </div>
                    </div>

                    <div className="vendome">
                      <div className="vext">Back to Vendors</div>
                      <div>
                        <img src={dome} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navbar Section */}
                <div className="navout">
                  <navbar className="navbard">
                    <div className="nav_searchd">
                      <div className="search_holderd">
                        <AiOutlineSearch className="searchicon" />
                        <input
                          type="text"
                          placeholder="Search in Mama J Bukka"
                          className="search_inputd"
                        />
                      </div>
                    </div>
                  </navbar>
                </div>

               <SpecialOrder/>

                {/* {Special && <SpecialOrder />}
                {Default && <Defaults />} */}
                
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

                  <Link to="/checkout" className="prout">
                    <div className="prext">PROCEED TO CASHOUT</div>
                  </Link>
                </div>
              </section>
            </main>
          </article>


        </article>
       
    </main>
  );
};
export default Dashboard;
