import React, { useState } from 'react'
import data from '../../data/Alldata'
import Product from '../page/product'
import './vege.css'

const DataMap = ({typ}) => {
    const [items] = useState(data)
  return (
    <div className='vege_table'>
        {
            items.map((e,index)=>{
                if( typ === e.type ){
                    return(<Product pic={e.pic} name={e.type} price={e.price} item={e} key={index} pName={e.name}/>)
                }
                else{
                    return null
                }
            })
        }
       
    </div>
  )
}

export default DataMap