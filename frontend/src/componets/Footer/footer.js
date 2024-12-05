import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>

            <div style={{backgroundColor:'#45595b',width:'100%'}}>


                <div className='footer'>

                    <div className='text1'>
                        <h1>Why People Like us!</h1>
                        <p>typesetting, remaining <br /> essentially unchanged. It was <br />popularised in the 1960s with <br /> the like Aldus PageMaker <br />including of Lorem Ipsum.</p>
                    </div>

                    <div className='text2'>
                        <h1>Shop Info</h1>
                        <ul>
                            <li>
                                <a>About Us</a>
                                <a>Contact Us</a>
                                <a>privacy Policy</a>
                                <a>Terms & Condition</a>
                                <a>Return Policy</a>
                                <a>FAQs & Help</a>
                            </li>
                        </ul>
                    </div>

                    <div className='text3'>
                        <h1>Account</h1>
                        <ul>
                            <li>
                                <a>My Account</a>
                                <a>Shop Detail</a>
                                <a>Shopping Cart</a>
                                <a>Wishlist</a>
                                <a>Order History</a>
                                <a>International Order</a>
                            </li>
                        </ul>
                    </div>

                    <div className='text4'>
                        <h1>Contact</h1>
                        <p>Address: 1429 Netus Rd, NY 48247</p>
                        <p>Email:Smile@24gmail.com</p>
                        <p>Phone: +0123 4567 8910</p>
                        <p>Payment Accepted</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
