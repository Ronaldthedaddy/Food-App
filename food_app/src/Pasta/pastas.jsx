import React from 'react'
import plainpasta from "../images/plainpasta.png";
import jollofpasta from "../images/jollofpasta.png";
import macaroni from "../images/macaroni.png";
import {IoIosAdd} from "react-icons/io"
// import Modal from "../Modal/Modal";
// import classes from "../style.modules.css"

const pastas = () => {
  return (
    <div>

<article className="bomelette">

<section className="boiledyam">
  
<div><img src={plainpasta} alt=""/></div>

<div className="boiladd">

<div className="boilcount">
<span className="boiltext">Plain Pasta</span>
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
  
  <div><img src={jollofpasta} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Jollof Pasta </span>
      <span className="sixhtext">&#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>




  <section className="boiledyam">
  
  <div><img src={macaroni} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Macaroni</span>
      <span className="sixhtext">&#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>

</article>
    </div>
  )
}

export default pastas