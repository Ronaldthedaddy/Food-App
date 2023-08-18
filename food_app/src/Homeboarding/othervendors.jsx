import React, { useState } from "react";
import anoint from "../images/anoint.png";
import item from "../images/item.png";
import tko from "../images/tko.png";
import odobe from "../images/odobe.png";
import crown from "../images/crown.png";
import tega from "../images/tega.png";
import shop from "../images/shop.png";
import star from "../images/star.png";
import iya from "../images/iya.png";
// import { MdOutlineArrowForward } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
const OtherVendors = () => {
  const [vendors] = useState([
    {
      name: "Iya Skye Bukka Hut",
      image: iya,
    },
    {
      name: "TKO",
      image: tko,
    },
    {
      name: "Item 7 Meal",
      image: item,
    },
    {
      name: "Anointing Bukka Spot",
      image: anoint,
    },
    {
      name: "Odobe Bukka",
      image: odobe,
    },
    {
      name: "Crown Meal",
      image: crown,
    },
    {
      name: "Tega Delicious",
      image: tega,
    },
    {
      name: "Shop 33 Plaza",
      image: shop,
    },
  ]);
  return (
    <>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          draggable={true}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {vendors?.map((a) => {
            return (
              <SwiperSlide>
                <div className="ven_details">
                  <img src={a?.image} alt="" className="mama" />
                  <div className="ven_name">{a?.name}</div>
                  <span className="ven_rating">
                    {" "}
                    <img src={star} alt="" />
                    4.9 <span className="ratings">(500+)</span>
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <div className="mdoutline">
          <MdOutlineArrowForward className="mdicon" />
          <Morevendor />
        </div> */}
    </>
  );
};

export default OtherVendors;
