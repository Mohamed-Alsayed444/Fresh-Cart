import React from 'react'
import "./MainSlider.module.css"
import Slider from "react-slick";

import slider1 from "../../Assets//images/slider-image-1.jpeg"
import slider2 from "../../Assets//images/slider-image-2.jpeg"
import slider3 from "../../Assets//images/slider-image-3.jpeg"
import blog1 from "../../Assets//images/blog-img-1.jpeg"
import blog2 from "../../Assets//images/blog-img-2.jpeg"

export default function MainSlider() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return <>
  <div className="row gx-0 mt-4 mb-3">
    <div className="col-md-9">

    <Slider {...settings}>
         <img height={400} className='w-100' src={slider1} alt="photoSlider" />
         <img height={400} className='w-100' src={slider2} alt="photoSlider" />
         <img height={400} className='w-100' src={slider3} alt="photoSlider" />
        </Slider>
    </div>
    <div className="col-md-3">
      <img className='w-100' height={200}  src={blog1} alt="photoSlider"  />
      <img className='w-100' height={200} src={blog2} alt="photoSlider"  />
    </div>
  </div>
  


  </>
}
