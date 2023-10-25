import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function OrderedProduct({ id, image, title, price, rating, quantity }) {

    const [{orders, user}, dispatch] = useStateValue();

    const removeFromBasket = () => { 
        dispatch({
            type: 'REMOVE_SINGLE_ITEM_FROM_ORDERS',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image}></img>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map((i, idx) => (
                        <p>⭐</p>
                    ))}
                </div>
                <p className="checkoutProduct_quantity">Quantity: {quantity}</p>
                <button className='remove' onClick={removeFromBasket}>Cancel Order</button>
            </div>
        </div>
    )
}

export default OrderedProduct
