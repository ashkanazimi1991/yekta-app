import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class ClinicSlider extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      initialSlide: 2,
      fade: true,
      slidesToShow: 1,
      dots:true,
      slidesToScroll: 1,
      speed: 1500,
      lazyLoad: true,
      adaptiveHeight: true,
      pauseOnHover: true,
      // responsive: [
      //   // {
      //   //   breakpoint: 1024,
      //   //   settings: {
      //   //     slidesToShow: 3,
      //   //     slidesToScroll: 3,
      //   //     infinite: true,
      //   //     dots: true
      //   //   }
      //   // },
      //   // {
      //   //   breakpoint: 1200,
      //   //   settings: {
      //   //     slidesToShow: 2,
      //   //     slidesToScroll: 2,
      //   //     initialSlide: 2
      //   //   }
      //   // },
      //   // {
      //   //   breakpoint: 480,
      //   //   settings: {
      //   //     slidesToShow: 1,
      //   //     slidesToScroll: 1
      //   //   }
      //   // }
      // ]

    };
    return (
      <div className="  w-full min-h-screen items-center container overflow-hidden">
        <Slider {...settings}>
       

            <img height='1200' width='1200'  className=" w-full h-screen  object-cover  rounded-xl  justify-center "
               src={this.props.img1} alt=" مدیریت آنلاین" />
         
 
         <img height='1200' width='1200'  className=" w-full h-screen  object-cover  rounded-xl  justify-center "
               src={this.props.img2} alt=" مدیریت آنلاین" />



{/* <img height='1200' width='1200'  className=" w-full min-h-screen  object-cover object-center rounded-xl  justify-center "
               src={this.props.img3} alt=" مدیریت آنلاین" /> */}


{/* <img height='1200' width='1200'  className=" w-full min-h-screen  object-cover object-center rounded-xl  justify-center "
               src={this.props.img4} alt=" مدیریت آنلاین" /> */}


        </Slider>
      </div>
    );
  }
}
