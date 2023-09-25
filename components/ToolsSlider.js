import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

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
      adaptiveHeight: true,
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <div className=" items-center container py-8 overflow-hidden">
        <Slider {...settings}>
          <div >
              <p className="text-[#80ece1] sm:text-sm py-3   text-md text-center " >{this.props.title1} </p>
            <div className="flex justify-center">
            <Image height='1200' width='1200'  className=" w-[80%]  object-cover rounded-xl  justify-center "
               src={this.props.img1} alt=" مدیریت آنلاین" />
            </div>
          </div>
         
          <div>
          <p className="text-[#80ece1] sm:text-sm py-3   text-sm lg:text-lg text-center " >{this.props.title2} </p>
            <div className="flex justify-center">
            <Image height='1200' width='1200' className=" w-[80%]   object-cover rounded-xl  justify-center   " src={this.props.img2} alt="کلینیک یکتا" />
            </div>
          </div>
        
          <div>
          <p className="text-[#80ece1] sm:text-sm py-3   text-sm lg:text-lg text-center " >{this.props.title2} </p>
            <div className="flex justify-center">
            <Image height='1200' width='1200' className=" w-[80%]   object-cover rounded-xl  justify-center   " src={this.props.img2} alt="کلینیک یکتا" />
            </div>
          </div>
 
          <div>
          <p className="text-[#80ece1] sm:text-sm py-3   text-sm lg:text-lg text-center " >{this.props.title1} </p>
            <div className="flex justify-center">
            <Image height='1200' width='1200' className=" w-[80%]   object-cover rounded-xl  justify-center   " src={this.props.img2} alt="کلینیک یکتا" />
            </div>
          </div>



        </Slider>
      </div>
    );
  }
}
