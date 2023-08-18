import React from 'react'
import amala from "../images/amala.png";
import poundedyam from "../images/poundedyam.png";
import semo from "../images/semo.png";
import wheat from "../images/wheat.png";
import eba from "../images/eba.png";
import {IoIosAdd} from "react-icons/io"

const Swallows = () => {
  return (
    <div>
        <article className="bomelette">

<section className="boiledyam">
  
<div><img src={amala} alt=""/></div>

<div className="boiladd">

<div className="boilcount">
<span className="boiltext">Amala</span>
<span className="tentext">10% Discount</span>
<span className="sixhtext">&#8358;400.00</span>
</div>


<div>
<div 
className="addicon"
// onClick={()=>{
// setShow(true);
// }}
>
<IoIosAdd/>


</div>
{/* <Modal open={show}>
  <section className={classes.modalBackground}>
    <div>
      <button
      onClick={()=>setShow(false)}>
        x
      </button>
      hvgjfdy
    </div>
  </section>
</Modal> */}

</div>


</div>

</section>




<section className="boiledyam">
  
  <div><img src={poundedyam} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Pounded Yam </span>
      <span className="sixhtext">&#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>




  <section className="boiledyam">
  
  <div><img src={semo} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Semo</span>
      <span className="sixhtext">&#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>



  <section className="boiledyam">
  
  <div><img src={wheat} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Wheat</span>
    <span className="tentext">10% Discount</span>
      <span className="sixhtext">&#8358;500.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>



  <section className="boiledyam">
  
  <div><img src={eba} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Eba</span>
      <span className="tentext">5% Discount</span>
      <span className="sixhtext">&#8358;500.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>

</article>
    </div>
  )
}

export default Swallows