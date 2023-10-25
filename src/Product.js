import React, { useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(0);

  const addToBasket = () => {
    const productInBasket = basket.find(item => item.id === id);

    if (productInBasket) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        id: id,
        quantity: 1,
      });
    } else {
      dispatch({
        type: 'ADD_TO_BASKET',
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
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);

      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      });
    }
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating).fill().map((_, idx) => (
            <p key={idx}>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt={title} />

      {quantity === 0 ? (
        <button className="add" onClick={addToBasket}>
          Add to Basket
        </button>
      ) : (
        <div className="product_quantity">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={addToBasket}>+</button>
        </div>
      )}
    </div>
  );
}

export default Product;
