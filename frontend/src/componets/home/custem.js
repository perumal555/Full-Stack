import React from 'react'
import { Card } from 'react-bootstrap'

const Custem = () => {
  return (
     <>
       
        <div className='custem'>

            <div className='custem-detail'>
                  <Card style={{ width: '15rem',height:'23rem' }}>
                        <Card.Img variant="top" src='./img/person-logo.jpg' style={{width:'210px'}}/>
                        <h3>satisfied customers</h3>
                        <p>1963</p>
                  </Card>
              

                  <Card style={{ width: '15rem',height:'23rem' }}>
                        <Card.Img variant="top" src="./img/person-logo.jpg" style={{width:'210px'}}/>
                        <h3>quality of services</h3>
                        <p>99%</p>
                  </Card>
              

                  <Card style={{ width: '15rem', height:'23rem'}}>
                        <Card.Img variant="top" src="./img/person-logo.jpg" style={{width:'210px'}}/>
                        <h3>quality certificates</h3>
                        <p>33</p>
                  </Card>
              

                  <Card style={{ width: '15rem', height:'23rem'}}>
                        <Card.Img variant="top" src="./img/person-logo.jpg" style={{width:'210px'}}/>
                        <h3>Available Products</h3>
                        <p>789</p>
                  </Card>
              
            
            </div> 
        </div>
     
     </>
  )
}

export default Custem