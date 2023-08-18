import React, {useState} from 'react';
import Breakfast from '../Dashboard/breakfast';
import Riced from '../Dashboard/Ricestew';
import Pasta from '../Dashboard/pastas';
import Swallows from '../Dashboard/Swallows';
import Other from '../Dashboard/Others';

const SpecialOrder = () => {
   const [ Breakfast1, setBreakfast1] = useState(true);
   const [ Rice1, setRice1] = useState(false);
   const [ Swallows1, setSwallows1] = useState(false);
   const [ Pasta1, setPasta1] = useState(false);
   const [ Other1, setOther1] = useState(false);


  return (
    <main className=''>
         <section className="brice">
            
            <div 
            className="breaktext"
            onClick={(()=>{
              setBreakfast1(true);
              setPasta1(false);
              setOther1(false);
              setSwallows1(false);
              setRice1(false);
            })}
            style={{
              borderBottom:Breakfast1?"4px solid #36AAD9" :"",
              color:Breakfast1?"#36aad9":"",
            }}
            >BREAKFAST</div>
            <div 
            className="ricetext"
            onClick={(()=>{
              setBreakfast1(false);
              setPasta1(false);
              setOther1(false);
              setSwallows1(false);
              setRice1(true);
            })}
            style={{
                borderBottom:Rice1?"4px solid #36AAD9" :"",
                color:Rice1?"#36aad9":"",
            }}
            >RICE</div>
            <div  
            className="pastext"
            onClick={(()=>{
              setBreakfast1(false);
              setPasta1(true);
              setOther1(false);
              setSwallows1(false);
              setRice1(false);
            })}
            style={{
              borderBottom:Pasta1?"4px solid #36AAD9" :"",
              color:Pasta1?"#36aad9":"",
          }}
            >PASTA</div>
            <div 
            className="swext"
            onClick={(()=>{
              setBreakfast1(false);
              setPasta1(false);
              setOther1(false);
              setSwallows1(true);
              setRice1(false);
            })}
            style={{
              borderBottom:Swallows1?"4px solid #36AAD9" :"",
              color:Swallows1?"#36aad9":"",
          }}
            >SWALLOWS</div>
            <div 
            className="otherstext"
            onClick={(()=>{
              setBreakfast1(false);
              setPasta1(false);
              setOther1(true);
              setSwallows1(false);
              setRice1(false);
            })}
            style={{
              borderBottom:Other1?"4px solid #36AAD9" :"",
              color:Other1?"#36aad9":"",
          }}
            >OTHERS</div>

            </section>

            {Breakfast1 && <Breakfast />}
            {Rice1 && <Riced/>}
            {Pasta1 && <Pasta/>}
            {Swallows1 && <Swallows/>}
            {Other1 && <Other/>}



          
    </main>
  )
}

export default SpecialOrder