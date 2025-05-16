import React from 'react';
import styleitem from './itemdescription.module.css';
import Navbar from './navbar';
import amor from '../../assets/amor.png';
import { useCart } from 'react-use-cart';

const ItemDescription = () => {
  const { addItem } = useCart();

  const product = {
    id: 1, 
    name: 'Amorous Amor',
    price: 99999, 
    image: amor,
    description: 'A lovely arrangement of roses wrapped in delicate blush tones — perfect for someone unforgettable.',
  };

  return (
    <div className={styleitem.itemContainer}>
      <Navbar />

      <div className={styleitem.content}>
        {/* PRODUCT IMAGE */}
        <div className={styleitem.productimage}>
          <img src={product.image} alt={product.name} />
        </div>

        {/* PRODUCT DETAILS */}
        <div className={styleitem.productdescription}>
          <h1 className={styleitem.productname}>{product.name}</h1>
          <h3 className={styleitem.price}>₱{product.price}</h3>
          <h2 className={styleitem.description}>{product.description}</h2>

          <div className={styleitem.buttongroup}>
            <button 
              type="button" 
              className={styleitem.add}
              onClick={() => addItem(product)}>add to bag</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;