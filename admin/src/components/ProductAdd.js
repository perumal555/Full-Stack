import React, { useState } from 'react'
import axios from 'axios';



const ProductAdd = () => {

const [name, setName]=useState("")
const [desc, setDesc]=useState("")
const [price, setPrice]=useState("")
const [image, setImage]=useState("")

const handleingSubmit = async(e) => {
    e.preventDefault();
    try{
        const formData = new FormData()

        formData.append("name",name)
        formData.append("desc",desc)
        formData.append("price",price)
        formData.append("image",image)

        const response = await axios.post("http://localhost:5000/product/insert",formData)
        if(response.data){
            setName("")
            setDesc("")
            setPrice("")
            setImage("")
        }
    }catch(er){
        alert(er)
    }

}

  return (
    <>
        <form onSubmit={handleingSubmit}>
            
                <input type='text' onChange={(e)=>setName(e.target.value)} value={name} />
                <input type='text' onChange={(e)=>setDesc(e.target.value)} value={desc} />
                <input type='text' onChange={(e)=>setPrice(e.target.value)} value={price} />
                <input type='file' onChange={(e)=>setImage(e.target.value)} value={image} />
                <button type='submit'>Add</button>
            
        </form>
    </>
  )
}

export default ProductAdd