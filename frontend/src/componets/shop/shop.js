import React, { useState } from 'react'
import './shop.css'
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Shop = () => {

  const [searchList, setSearchList] = useState('')
  console.log('cheling', searchList)

  const filteredCountes = shopdata.filter(item =>
    item.fname.toLowerCase().includes(searchList.toLowerCase())
  )

  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setCount(Number(event.target.value));
  };
  return (
    <>

      <div className='shop'>
        <h1>shop</h1>
      </div>

      <div className='shop-container'>
        <h1 style={{ color: '#45595b', marginLeft: '7%' }}>Fresh fruits shop</h1>

        <div className='shop-contant'>
          <div className='shop-input'>
            <div className='type-text'>
              <input type='search' placeholder='keyword' value={searchList} onChange={e => setSearchList(e.target.value)} />
            </div>
          </div>

          <div className='page-store' style={{ display: 'flex', backgroundColor: 'rgba(232, 236, 236, 0.986)' }}>
            <h4>Default Sorting:</h4>
            <div style={{ padding: '5px' }}>
              <NavDropdown title="Nothing" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cart">populate </NavDropdown.Item>
                <NavDropdown.Item href="/viewcart">Organic</NavDropdown.Item>
                <NavDropdown.Item href="/viewcart">Fantasstic</NavDropdown.Item>
              </NavDropdown>
            </div>

          </div>
        </div>


        <div className='shop-all-img'>

          <div style={{ width: '50%' }}>
            <h2 style={{ textAlign: 'center' }}>Categories</h2>
            <div style={{ alignItems: 'center', marginLeft: '32%' }} className='p-span'>
              <p>🍏Apple <span style={{ marginLeft: '40px' }}>-(4)</span>  </p>
              <p>🍏Oranges <span style={{ marginLeft: '23px' }}>-(3)</span> </p>
              <p>🍏Strawbery <span style={{ marginLeft: '13px' }}>-(5)</span> </p>
              <p>🍏Banana <span style={{ marginLeft: '30px' }}>-(4)</span> </p>
              <p>🍏Pumpkin <span style={{ marginLeft: '20px' }}>-(3)</span> </p>
              <p>🍏Grapes <span style={{ marginLeft: '32px' }}>-(3)</span> </p>
            </div>

            <div style={{ alignItems: 'center', marginLeft: '32%' }}>
              <h2>Price</h2>
              <p>
                <input type='range' min="0" max="100" value={count} onChange={handleInputChange}/>
                <h5>{count}</h5>
              </p>
            </div>

            <div style={{ alignItems: 'center', marginLeft: '32%' }} className='p-span'>
              <h2>Additional</h2>
              <p> <input type='radio' value={searchList} /> Organic</p>
              <p> <input type='radio' /> Fresh</p>
              <p> <input type='radio' /> Sales</p>
              <p> <input type='radio' /> Discount</p>
              <p> <input type='radio' /> Expired</p>
            </div>

            <div style={{ alignItems: 'center', marginLeft: '32%' }}>
              <h2>Featured products</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <img src='./img/featur-1.jpg' style={{ width: '100px', height: '100px' }} />
                <div>
                  <div>
                    <p><p>Big Banana</p></p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStarHalfAlt /></p>
                  </div>

                  <div>
                    <p>2.99 $ <del style={{ color: 'red' }}>4.11 $</del> </p>
                  </div>

                </div>

              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <img src='./img/featur-2.jpg' style={{ width: '100px', height: '100px' }} />

                <div>
                  <div>
                    <p><p>Big Banana</p></p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStarHalfAlt /></p>
                  </div>

                  <div>
                    <p>2.99 $ <del style={{ color: 'red' }}>4.11 $</del> </p>
                  </div>

                </div>

              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <img src='./img/featur-3.jpg' style={{ width: '100px', height: '100px' }} />

                <div>
                  <div>
                    <p><p>Big Banana</p></p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStarHalfAlt /></p>
                  </div>

                  <div>
                    <p>2.99 $ <del style={{ color: 'red' }}>4.11 $</del> </p>
                  </div>

                </div>
              </div>

            </div>

            <div style={{ alignItems: 'center', marginLeft: '32%' }}>
              <img src='./img/banner-fruits.jpg' style={{ width: '210px' }} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }} >


            <div className='shop-hover'>
              {
                filteredCountes.map((item) => {
                  return (
                    <div className='filter-shop'>
                      <Link to={'/allproduct'} style={{ textDecoration: 'none' }}>
                        <Card style={{ width: '17rem', height: '350px' }}>
                          <Card.Img variant="top" src={item.img} className='filter-imgs' />
                          <Card.Body>
                            <Card.Title style={{textAlign:'center'}}>{item.fname}</Card.Title>

                          </Card.Body>
                        </Card>
                      </Link>
                    </div>

                  )
                }
                )
              }
            </div>
          </div>
        </div>
      </div>


    </>
  )
}


const shopdata = [
  {
    img: "img/best-product-1.jpg",
    fname: "apple"
  },
  {
    img: "img/best-product-2.jpg",
    fname: 'orange'
  },
  {
    img: "img/best-product-3.jpg",
    fname: 'graps'
  },
  {
    img: "img/best-product-4.jpg",
    fname: 'banana'
  },
  {
    img: "img/best-product-4.jpg",
    fname: 'banana'
  },
  {
    img: "img/best-product-4.jpg",
    fname: 'banana'
  },
  {
    img: "img/best-product-4.jpg",
    fname: 'banana'
  }
]
export default Shop
