import React from 'react'
import './style.css';

const ShopDetail = () => {
  return (
    <>
      <div className='detail'>

        <div className='detail-card'>
           <h1>24 hours free deliver service </h1>
           <hr style={{width:'80%', marginLeft:'10%', color:'orange'}}/>    

              <div style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap'}}>

                <div  className='detail3'>
                  <h2>About Us</h2>
                  <ul>
                    <li><a> About the AHA/ASA</a></li>
                    <li><a>Our Impact</a></li>
                    <li><a>Annual Report</a></li>
                    <li><a>AHA Financial Information</a></li>
                    <li><a>International Programs</a></li>
                  </ul>
                </div>

                <div className='detail3'>
                  <h2>Get Involved</h2>
                  <ul>
                    <li><a>ShopHeart</a></li>
                    <li><a>Ways to Give</a></li>
                    <li><a>Go Red For Women</a></li>
                    <li><a>Make a Memorial Gift</a></li>
                    <li><a>ShopCPR</a></li>
                  </ul>
                </div>

                <div className='detail3'>
                  <h2>Our Sites</h2>
                  <ul>
                    <li><a>American Heart Association</a></li>
                    <li><a>American Stroke Association</a></li>
                    <li><a>CPR & ECC</a></li>
                    <li><a>Professional Heart Daily</a></li>
                    <li><a>More Sites</a></li>
                  </ul>
                </div>

              </div>      

              <div>
                <h1>Customers for Deliver Address & Contacte</h1>
              </div>

              <form className='from-data'>

                <div className='damy-data'>
                  <label>E-Mail</label>
                  <input type='email' className='input  input1'/>
                </div>
                <div className='damy-data'>
                  <label>Mobile</label>
                  <input type='text' className='input  input2'/>
                </div>
                <div className='damy-data'>
                  <label>Address</label>
                  <input type='address' className='input input3'/>
                </div>
              </form>
        </div>      

      </div>
    </>
  )
}

export default ShopDetail
