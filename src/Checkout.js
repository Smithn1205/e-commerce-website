import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import Header from './Header';

function Checkout() {
  const[{basket, user}, dispatch] = useStateValue();
  
  const removeAllFromBasket = () => {
    dispatch({
      type: 'REMOVE_ALL_FROM_BASKET',
    });
  };
  
  return (
    <div>
      <Header />

      <div className='checkout'>
        <div className='checkout_left'>
          <div>
            <div className="checkout_title_container">
              <h2 className="checkout_title">Your Cart</h2>
                {basket.length > 0 && (
                <button className="removeAllButton" onClick={removeAllFromBasket}>
                  Remove All
                </button>
              )}
            </div>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <div className='vertical_line'></div>
        <div className='checkout_right'>
        {basket.length > 0 && (
        <Subtotal />
        )}
        </div>
      </div>
    </div>
  )
}

export default Checkout;
