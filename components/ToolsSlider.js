import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
// import Image from 'next/image';

export default class ToolsSlider extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      initialSlide: 2,
      // fade: true,
      slidesToShow: 2,
      dots:true,
      slidesToScroll: 1,
      speed: 1500,
      lazyLoad: true,
      // adaptiveHeight: true,
      pauseOnHover: true,
      responsive: [
        {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: true
        //   }
        // },
        // {
        //   breakpoint: 1200,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 2,
        //     initialSlide: 2
        //   }
        // },
        // {
          breakpoint: 880,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <div className="  container   py-8 overflow-hidden">
        <Slider {...settings}>
          <div className=" flex justify-center items-center px-10 " >
              <p className="text-rose-700  text-sm py-4 px-[2%]  text-center " >{this.props.title1} </p>
            <div className="flex flex-col  justify-center">
            <img height='600' width='800'  className=" shadow-xl  object-cover rounded-xl  "
               src={this.props.img1} alt=" مدیریت آنلاین" />

              <p className="text-rose-700  text-sm py-4 px-[8%]  text-center " >{this.props.des1} </p>
            </div>
          </div>
         
    
        
          <div className=" flex justify-center items-center px-10  " >

          <p className="text-rose-700  text-sm py-4 px-[2%]  text-center " >{this.props.title2} </p>
            <div className="flex flex-col  justify-center">
            <img height='600' width='800' className="  shadow-xl object-cover rounded-xl  justify-center   " src={this.props.img2} alt="کلینیک یکتا" />

            <p className="text-rose-700  text-sm py-4 px-9   text-center " >{this.props.des2} </p>
            </div>
          </div>
 
          <div className="flex justify-center items-center px-10  " >

          <p className="text-rose-700  text-sm py-4 px-[2%]  text-center " >{this.props.title1} </p>
            <div className="flex flex-col  justify-center">
            <img height='600' width='800' className="   shadow-xl object-cover rounded-xl  justify-center   " src={this.props.img2} alt="کلینیک یکتا" />
            <p className="text-rose-700  text-sm py-4 px-[8%]  text-center " >{this.props.des2} </p>
            </div>
          </div>



        </Slider>
      </div>
    );
  }
}
