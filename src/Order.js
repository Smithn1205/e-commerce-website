import React from 'react';
import "./Checkout.css";
import OrderedProduct from './OrderedProduct';
import { useStateValue } from './StateProvider';
import Header from './Header';

function Order() {
  const[{orders, user}, dispatch] = useStateValue();

  return (
    <div>
      <Header />

      <div className='checkout'>
        <div className='checkout_left'>
          <div>
            <div className="checkout_title_container">
              <h2 className="checkout_title">Your Orders</h2>
            </div>
            {orders.map(item => (
              <OrderedProduct
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
      </div>
    </div>
  )
}

export default Order;
