import React from 'react'
import mama from "../images/Mama J.png"
import choice from "../images/Choice Meals.png"
import kobe from "../images/Kobe Delicious.png"
import gidi from "../images/Gidi Grills.png"
import star from "../images/star.png"
// import axios from 'axios'


const TopVendors = () => {

    // let useDetails = JSON.parse(localStorage.getItem("vendor"));
	// const token = useDetails?.data?.token;
	// const config = {
	// 	headers: {
	// 		Authorization: useDetails?.data?.token,
	// 	},
	// };
	// const clientTransactions = async () => {
	// 	await axios
	// 		.get("http://89.38.135.41:7654/api/users/dashboard", config)
	// 		.then((res) => {
	// 			// setGetTransaction(res.data?.data);
	// 			console.log(res.data);
	// 		})
	// 		.catch((err) => {});
	// };
	// };
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

</section>
  )
    }

export default TopVendors