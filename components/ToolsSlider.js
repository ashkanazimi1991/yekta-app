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
      initialSlide: 4,
      // fade: true,
      slidesToShow: 4,
      dots:true,
      slidesToScroll: 2,
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
      <div className="  container    overflow-hidden">
        <Slider {...settings} className='fs'>

         
        <div className='relative '>
            <img  className="  w-full h-[500px] shadow-xl   object-cover rounded-xl  "
               src={this.props.img1} alt=" مدیریت آنلاین" />
        <div className=''>
        <div className='backdrop-blur-sm w-full flex h-20 justify-center items-center flex-row-reverse  z-10 rounded-b-md bg-[#18544e8a] absolute left-0 bottom-0'>

          <p className="text-blue-50 font-bold w-1/3 flex justify-center items-center  h-full bg-[#00000061] cursor-pointer  text-md  text-center " >{this.props.title1} </p>
          <p className="text-rose-50   text-sm  w-2/3  text-center " >{this.props.des1} </p>
          </div>
        </div>

      </div>

      <div className='relative '>
            <img   className="  w-full h-[500px] shadow-xl   object-cover rounded-xl  "
               src={this.props.img2} alt=" مدیریت آنلاین" />
        <div className=''>
        <div className='backdrop-blur-sm w-full flex h-20 justify-center items-center flex-row-reverse  z-10 rounded-b-md bg-[#18544e8a] absolute left-0 bottom-0'>

          <p className="text-blue-50 font-bold w-1/3 flex justify-center items-center  h-full bg-[#00000061] cursor-pointer  text-md  text-center " >{this.props.title1} </p>
          <p className="text-rose-50   text-sm  w-2/3  text-center " >{this.props.des1} </p>
          </div>
        </div>

      </div>


      <div className='relative '>
            <img   className="  w-full h-[500px] shadow-xl    object-cover rounded-xl  "
               src={this.props.img3} alt=" مدیریت آنلاین" />
        <div className=''>
        <div className='backdrop-blur-sm w-full flex h-20 justify-center items-center flex-row-reverse  z-10 rounded-b-md bg-[#18544e8a] absolute left-0 bottom-0'>

          <p className="text-blue-50 font-bold w-1/3 flex justify-center items-center  h-full bg-[#00000061] cursor-pointer  text-md  text-center " >{this.props.title1} </p>
          <p className="text-rose-50   text-sm  w-2/3  text-center " >{this.props.des1} </p>
          </div>
        </div>

      </div>



      <div className='relative '>
            <img   className="  w-full h-[500px] shadow-xl   object-cover rounded-xl  "
               src={this.props.img3} alt=" مدیریت آنلاین" />
        <div className=''>
        <div className='backdrop-blur-sm w-full flex h-20 justify-center items-center flex-row-reverse  z-10 rounded-b-md bg-[#18544e8a] absolute left-0 bottom-0'>

          <p className="text-blue-50 font-bold w-1/3 flex justify-center items-center  h-full bg-[#00000061] cursor-pointer  text-md  text-center " >{this.props.title1} </p>
          <p className="text-rose-50   text-sm  w-2/3  text-center " >{this.props.des1} </p>
          </div>
        </div>

      </div>


      <div className='relative '>
            <img height='600' width='800'  className="  w-full h-[500px] shadow-xl  object-cover rounded-xl  "
               src={this.props.img4} alt=" مدیریت آنلاین" />
        <div className=''>
        <div className='backdrop-blur-sm w-full flex h-20 justify-center items-center flex-row-reverse  z-10 rounded-b-md bg-[#18544e8a] absolute left-0 bottom-0'>

          <p className="text-blue-50 font-bold w-1/3 flex justify-center items-center  h-full bg-[#00000061] cursor-pointer  text-md  text-center " >{this.props.title1} </p>
          <p className="text-rose-50   text-sm  w-2/3  text-center " >{this.props.des1} </p>
          </div>
        </div>


        

      </div>

      <div className='relative '>
            <img className="  w-full h-[500px] shadow-xl  object-cover rounded-xl  "
               src={this.props.img5} alt=" مدیریت آنلاین" />
        <div className=''>
        <div className='backdrop-blur-sm w-full flex h-20 justify-center items-center flex-row-reverse  z-10 rounded-b-md bg-[#18544e8a] absolute left-0 bottom-0'>

          <p className="text-blue-50 font-bold w-1/3 flex justify-center items-center  h-full bg-[#00000061] cursor-pointer  text-md  text-center " >{this.props.title1} </p>
          <p className="text-rose-50   text-sm  w-2/3  text-center " >{this.props.des1} </p>
          </div>
        </div>


        

      </div>

        </Slider>
      </div>
    );
  }
}
