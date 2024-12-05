import React from 'react'

const Add = () => {
  return (
    <>
     
        {/* ============baner img card start========> */}

            <div className='baner'>

                <div className='banner-card'>
                    <img src="./img/featur-1.jpg" />
                    <div className='orange'></div>
                    <div className='contan'>
                        <h5>Fresh Furits</h5>
                        <h2>20% OFF</h2>
                    </div>
                </div>

                <div className='banner-card'>
                    <img src="./img/featur-2.jpg" />
                    <div className='blue'></div>
                    <div className='contan1'>
                        <h5>Tasty Furits</h5>
                        <h2>Free Delivery</h2>
                    </div>
                </div>

                <div className='banner-card'>
                    <img src="./img/featur-3.jpg" />
                    <div className='green'></div>
                    <div className='contan2'>
                        <h5>Exotic Vegitable</h5>
                        <h2>Discount 30$</h2>
                    </div>
                </div>
            </div>

        {/* ============baner img card end========> */}

    </>


  )
}

export default Add