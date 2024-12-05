import React from 'react'
import './home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';

const Sliders = () => {

    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 slides on larger screens
        slidesToScroll: 1,
        responsive: [
          
            {
                breakpoint: 786, // For tablets
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              }
        ]
    };
  return (
    <>
        {/* =============== aslider baner img start================> */}

        <div className='product3' style={{textAlign:"center"}}>
                <h2>Fresh Organic Vegetables & Furits</h2>
        </div>

            <div className='product'>
                <div className='product1'>
                    <Slider {...setting}>
                        {
                            product.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Card style={{ width: '15rem ' }} className='silder'>
                                            <Card.Img variant="top" src={item.pice} />
                                            <Card.Body>
                                                <h2>{item.title}</h2>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>

        {/* =============== slider baner img end================> */}

    </>


  )
}

const product = [
    {
        title: "Oranges",
        pice: "./img/fruite-item-1.jpg"
    },
    {
        title: "Raspberries",
        pice: "./img/fruite-item-2.jpg"
    },
    {
        title: "Banana",
        pice: "./img/fruite-item-3.jpg"
    },
    {
        title: "Apricots",
        pice: "./img/fruite-item-4.jpg"
    },
    {
        title: "Grapes",
        pice: "./img/fruite-item-5.jpg"
    },
    {
        title: "Apple",
        pice: "./img/fruite-item-6.jpg"
    }
]

export default Sliders