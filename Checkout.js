import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout_left">

                <img className="checkout_ad"
                    src="bm.jpg" alt="" />
        
                {basket?.length === 0 ? (
                    <div>
                        <h2>
                            Your Shopping Cart is Empty.
                </h2>
                        <p>You have no items in your cart.
                        To buy one or more items.
                        Click "Add to Basket"
                        to next to the item.
                </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout_title">Your Shopping Cart</h2>
                    
                            {/*List out all of checkout products */}
                            {basket?.map((item) => (
                              
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
)  }
    
    
export default Checkout
