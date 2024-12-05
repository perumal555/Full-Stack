import React from 'react'
import { useCart } from 'react-use-cart'
import { Container } from 'react-bootstrap';


const Cart = () => {
    const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart()
    if (isEmpty) return (<h1 className='text-center'>Your Cart is Emty</h1>)
    console.log(items);

    return (
        <>
        {/* /* ============= home cart img  1 start ================>  */}
        
                <Container fluid className='car-2-img'>
                    <div className="row justify-content-center">
                        <div className="col-12 total">
                            <h5>Cart({totalUniqueItems}) Total Items : ({totalItems})</h5>
                            {
                                        items.map((item, index) => {
                                            return (
                                                <div className="cart_all">
                                                    <div key={index} className='cart_tr'>
                                                        <img src={item.pic} style={{ width: "200px" }} alt='' />
                                                    </div> 

                                                    <div>
                                                        <p>{item.name}</p>
                                                        <p>Total Price :{item.price}</p>
                                                        <p>Quantity :{item.quantity}</p>
                                                    </div>
                                                      
                                                        <div className='clear-btn'>
                                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='bg-primary bbtn'>-</button>
                                                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='bg-primary bbtn'>+</button>
                                                            <button onClick={() => removeItem(item.id)} className='bg-dark text-light bbtn'>Remove Item</button>
                                                        </div>
                                                   
                                                </div>
                                            )
                                        })
                                    }
                            <div className='buy-btn'>
                                <h2>Total Price :{cartTotal}</h2>
                                <div>    
                                    <button onClick={emptyCart} className='bg-danger text-light my-4 clear-btn1'>Clear Cart</button>
                                    <button className='ms-4 bg-success text-light clear-btn1'>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            
            {/* /* ============= hoem cart img 1 end ================>  */}

        </>
    )
}

export default Cart;
