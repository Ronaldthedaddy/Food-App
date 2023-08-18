import React from 'react'
import mama from "../images/Mama J.png"
import choice from "../images/Choice Meals.png"
import kobe from "../images/Kobe Delicious.png"
import gidi from "../images/Gidi Grills.png"
import star from "../images/star.png"
// import { MdCallMade } from 'react-icons/md'


const TopVendors = () => {
    const topVendors = [{
        name: "Mama J Bukka",
        image: mama
    },{
        name: "Choice Meal",
        image: choice

    },{
        name:"Kobe Delicious",
        image: kobe
    },{
        name: "Gidi Grills",
        image: gidi
    }]

  return (
    <section className='four2'>
        {topVendors.map((a)=>{
            return(
                <div className='ven_details'>
                <img src={a.image} alt='' className='mama'/>
                <div className='ven_name'>{a.name}</div>
                <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(500+)</span></span>
                </div>
            )
        })}
    

    {/* <div className='ven_details'>
    <img src={choice} alt='' className='choice'/>
    <div className='ven_name'>Choice Meal</div>
    <span className='ven_rating'> <img src={star} alt=''/>4.7 <span className='ratings'>(500+)</span></span>
    </div>

    <div className='ven_details'>
    <img src={kobe} alt='' className='kobe'/>
    <div className='ven_name'>Kobe Delicious</div>
    <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(374+)</span></span>
    </div>

    <div className='ven_details'>
    <img src={gidi} alt='' className='gidi'/>
    <div className='ven_name'>Gidi Grills</div>
    <span className='ven_rating'> <img src={star} alt=''/>4.9 <span className='ratings'>(404+)</span></span>
    </div> */}

</section>
  )
}

export default TopVendors