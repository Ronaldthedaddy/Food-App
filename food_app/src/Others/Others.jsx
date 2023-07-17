import React from 'react'
import plainbeans from "../images/plainbeans.png";
import porridgebeans from "../images/porridgebeans.png";
import moinmoin from "../images/moinmoin.png";
import frenchfries from "../images/frenchfries.png";
import porridgeyam from "../images/porridgeyam.png";
import {IoIosAdd} from "react-icons/io"

const Others = () => {
  return (
    <div>
          <article className="bomelette">

<section className="boiledyam">
  
<div><img src={plainbeans} alt=""/></div>

<div className="boiladd">

<div className="boilcount">
<span className="boiltext">Plain Beans</span>
<span className="sixhtext">&#8358;500.00</span>
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
  
  <div><img src={porridgebeans} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Porridge Beans </span>
      {/* <span className="tentext">5% Discount</span> */}
      <span className="sixhtext">&#8358;500.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>




  <section className="boiledyam">
  
  <div><img src={moinmoin} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Moin - Moin</span>
      <span className="sixhtext">&#8358;700.00 / &#8358;400.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>



  <section className="boiledyam">
  
  <div><img src={frenchfries} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">French Fries</span>
    <span className="tentext">10% Discount</span>
      <span className="sixhtext">&#8358;700.00</span>
    </div>

    <div className="addicon"><IoIosAdd/></div>
      
  </div>

  </section>



  <section className="boiledyam">
  
  <div><img src={porridgeyam} alt=""/></div>

  <div className="boiladd">

    <div className="boilcount">
    <span className="boiltext">Porridge Yam</span>
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

export default Others