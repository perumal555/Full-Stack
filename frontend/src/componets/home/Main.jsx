import React from 'react'
import Card from 'react-bootstrap/Card';
import './home.css'
const Main = () => {
  return (
    <>
        
        {/* ============= img card start==============> */}

            <div className='car-img'>
               
                    <div className='car_img1'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/car-img.webp" />
                                <div className='text'>
                                    <h3>Free Shipping</h3>
                                    <p>Free on order over $300</p>
                                </div>
                        </Card>
                    </div>
               
                    <div className='car_img1'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/login-img.png" />
                                <div className='text'>
                                    <h3>Security Payment</h3>
                                    <p>100% security payment</p>
                                </div>
                        </Card>
                    </div>
                    
                    <div className='car_img1'>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/left-img.jpg" />
                                <div className='text'>
                                    <h3>30 Day Return</h3>
                                    <p>30 day money guarantee</p>
                                </div>
                        </Card>
                    </div>
               
                    
                   <div className='car_img1'>
                    <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="./img/contact-img.webp" />
                                <div className='text'>
                                    <h3>24/7 Support</h3>
                                    <p>Support every time fast</p>
                                </div>
                        </Card>
                   </div>
                    
               
            </div> 


    </>
  )
}

export default Main