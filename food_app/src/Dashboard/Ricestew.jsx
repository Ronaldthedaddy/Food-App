import React from 'react'
import whiterice from "../images/whiterice.png";
import friedrice from "../images/friedrice.png";
import jollofrice from "../images/jollofrice.png";
import nativerice from "../images/nativerice.png";
import ofadarice from "../images/ofadarice.png";
import jollofried from "../images/jollofried.png";
import {IoIosAdd} from "react-icons/io"
// import englishbreakfast from "../images/englishbreakfast.png";
// import Modal from "../Modal/Modal";
// import classes from "../style.modules.css"

const Ricestew = () => {
    // const [show, setShow] =  useState(true);

 


return (
<div>

<article className="bomelette">

<section className="boiledyam">
  
<div><img src={whiterice} alt=""/></div>

<div className="boiladd">

<div className="boilcount">
<span className="boiltext">White Rice</span>
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
  
  <div><img src={friedrice} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Fried Rice</span>
      <span className="sixhtext">&#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>




  <section className="boiledyam">
  
  <div><img src={jollofrice} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Jollof Rice</span>
      <span className="sixhtext">&#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>



  <section className="boiledyam">
  
  <div><img src={nativerice} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Native Rice</span>
    <span className="tentext">10% Discount</span>
      <span className="sixhtext">&#8358;500.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>



  <section className="boiledyam">
  
  <div><img src={ofadarice} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Ofada Rice</span>
      <span className="tentext">5% Discount</span>
      <span className="sixhtext">&#8358;500.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>

  

  <section className="boiledyam">
  
  <div><img src={jollofried} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Jollof & Fried Rice</span>
      <span className="sixhtext">&#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>


</article>
    </div>
  )
}

export default Ricestew