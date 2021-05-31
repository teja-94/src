import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,price,image,rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price:price
            }
        })
    };
    
    
    
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
               
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rate">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                        <p>★</p>
                    ))
                    }
            </div>
            </div>
                <img src={image} alt="Raagi Milltes" />
                <button onClick={addToBasket}>Add to Basket</button>
                
        </div>
    )
}

export default Product
