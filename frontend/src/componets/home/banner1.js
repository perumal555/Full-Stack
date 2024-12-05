import React from 'react'
import './home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner1 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <>
      {/* =============== carousel start ==============> */}

            <div className='banner_txt'>
               <div className='text'>
                    <h3>100% Organic Foods</h3>
                    <h4>Organic Veggies & <br /> Fruits Foods</h4>
                    <input type='search' placeholder='Search' />
                        <div className='btn'>
                            <button>Submit</button>
                        </div>
                </div>

                <div className='carousel'>
                    <div className=' cart-img'>
                        <Slider {...settings}>
                            {
                                add.map((pro, value) => {
                                    return (
                                        <div key={value}>
                                            <div>
                                                <img src={pro.img} />
                                            </div>

                                        </div>
                                        )
                                    })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
    
    </>
  )
}

const add = [
        {
            img: "./img/hero-img-1.png",
        },
        {
            img: "./img/hero-img-2.jpg",
        },
        {
            img: "./img/hero-img-1.png",
        }
    ]
export default Banner1