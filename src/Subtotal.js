import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './Subtotal.css';
import { useNavigate } from 'react-router-dom';

function Subtotal({ id, title, image, price, rating }) {
  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const navigateTopaymentmode = ()=>{
    navigate("/paymentmode")
    dispatch({
      type: "ADD_BASKET_TO_ORDERS",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: 1,
      },
    });
}
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    {basket.length > 0 ? (
        <button className='proceed' onClick={navigateTopaymentmode}>
          Proceed to checkout
        </button>
      ) : (
        <p className="empty-cart-prompt">Your cart is empty. Add items to proceed.</p>
      )}
    </div>
  )
}

export default Subtotal;
