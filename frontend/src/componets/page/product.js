import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart'
const Product = ({pic,price,item,pName , token}) => {
        const { addItem } = useCart()
   
    return (
        <>
            {/* ========= all product 1  start=============> */}
            <div>
                <Card className='product_card'>
                    <Card.Img variant="top" src={pic} className='product_img' />
                    <Card.Body style={{textAlign:'center', }}>
                        <Card.Title>{pName}</Card.Title>
                        <Card.Title>Price : $ {price}</Card.Title>
                        <Button variant="primary" onClick={() => {token ? addItem(item) : alert("Go Login")}}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* ========= all product 1  end=============> */}
            
        </>

    )
}

export default Product
