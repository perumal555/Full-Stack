import React, { useState } from 'react'
import { Link } from "react-router-dom";
import data from '../../data/Alldata';
import Product from '../page/product';

const Navbar = ({type,token}) => {

    const [datas] = useState(data);
  return (
    <>

       {/* ================= navbaar end ============> */}

        <div className='navbar1'>
            <div className='title'>
                <h2> Our Organic <br /> Products</h2>
            </div>

            <div className='nav1'>
                <ul>
                    <li><Link to={'/allproduct'}>All Products</Link></li>
                    <li><Link to={'/vegetable'}>Vegetable</Link></li>
                    <li><Link to={'/fruit'}>Furits</Link></li>
                    <li><Link to={'/brand'}>Brand</Link></li>
                </ul>
            </div>
        </div>

        {/* ================= navbaar end ============> */}


        {/* =============== Add To Cart ============> */}
           
        <div className='home_product'>
            {
                datas.map((e, index) => {
                    if(type === e.type){
                        return (
                             <Product pic={e.pic}   pName={e.category} price={e.price} key={index} item={e} token={token}/>
                        )
                    }
                })
            }
        </div> 
           

        {/* =============== Add To end ============> */}
    </>
  )
}

export default Navbar