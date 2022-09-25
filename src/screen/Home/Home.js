import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./Home.css";
import lamp from "../../images/lamp.png"
import Chair from "../../images/Chair.png"
import mens from "../../images/mens.png"
import watches from "../../images/watches.png"

import { Pagination } from "swiper";
import HomeProducts from "../../components/homeproducts/HomeProducts";

export default function Home() {

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="Homeslider">
            <div className="Homeright" style={{ width: "60%", display: 'flex' }}>
              <div style={{ width: "30%" }}>

                <img src={lamp} alt="lamp" style={{ transform: "scale(0.5)" }} />
              </div>
              <div className="hometext" style={{ paddingTop: "220px", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontSize: "22px" }}>Best <span style={{color:"green"}}>Furniture</span>  for your castle</span>
                <span style={{ fontSize: "42px" }}>New <span style={{color:"green"}}>Furniture</span> Collection</span>
                <span style={{ fontSize: "22px" }}>We Have a Best sales soo Dont Worry!</span>
              </div>

            </div>
            <div className="HomeLeft" style={{ width: "40%" }}>
              <div >
                <img src={Chair} alt="" />
              </div>

            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{backgrondColor:"yellow"}}>
            <div className="Homeright" style={{ width: "60%", display: 'flex' }}>
              <div style={{ width: "30%" }}>

                <img src={lamp} alt="lamp" style={{ transform: "scale(0.5)" }} />
              </div>
              <div className="hometext" style={{ paddingTop: "220px", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontSize: "22px" }}>Best <span style={{color:"green"}}>Mens Wear </span>Shirts</span>
                <span style={{ fontSize: "42px" }}>New <span style={{color:"green"}}>Clothes </span> Collection</span>
                <span style={{ fontSize: "22px" }}>Achi Shirts Nh hain? Not Possible!<br/></span>
              </div>

            </div>
            <div className="HomeLeft" style={{ width: "40%" }}>
              <div >
                <img src={mens} alt="" />
              </div>

            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div >
            <div className="Homeright" style={{ width: "60%", display: 'flex' }}>
              <div style={{ width: "30%" }}>

                <img src={lamp} alt="lamp" style={{ transform: "scale(0.5)" }} />
              </div>
              <div className="hometext" style={{ paddingTop: "220px", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontSize: "22px" }}>Best <span style={{color:"green"}}>Watches </span></span>
                <span style={{ fontSize: "42px" }}>New <span style={{color:"green"}}>Watches </span> Collection</span>
                <span style={{ fontSize: "22px" }}>Abhi Kia Time Horha hain ?</span>
                <span style={{ fontSize: "22px" }}>ohho Watch Kharab!</span>
              </div>

            </div>
            <div className="HomeLeft" style={{ width: "40%" }}>
              <div >
                <img src={watches} alt="" />
              </div>

            </div>

          </div>
         
        </SwiperSlide>

      </Swiper>
      <HomeProducts/>
    </>
  );
}
