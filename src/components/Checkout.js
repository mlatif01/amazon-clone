import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';

import '../css/Checkout.css';
import { useStateValue } from '../utils/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const FunctionalArticle = forwardRef((props, ref) => (
    <div ref={ref}>
      <CheckoutProduct {...props} />
    </div>
  ));
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          <FlipMove>
            {basket.map(({ id, title, image, rating, price }, i) => (
              // <CheckoutProduct
              //   key={id}
              //   id={id}
              //   title={title}
              //   image={image}
              //   rating={rating}
              //   price={price}
              // />
              <FunctionalArticle
                key={id}
                id={id}
                title={title}
                image={image}
                rating={rating}
                price={price}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
