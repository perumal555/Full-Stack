import React, { useState } from 'react'
import data from '../../data/Alldata'
import Product from '../page/product'

const DataMapAll = ({pro}) => {
    const [items] = useState(data)
  return (
    <div className='all_item' >
        {
            items.map((e,index)=>{
                
                if( pro === e.pro){
                  
                    return (<Product pic={e.pic} name={e.type} price={e.price} item={e} key={index} pName={e.name}/>)
                    
                }
                else{
                    return null
                }
            })
        }
       
    </div>
  )
}

export default DataMapAll