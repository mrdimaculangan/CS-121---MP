import React from 'react';
import styleitem from './itemdescription.module.css';
import Navbar from './navbar';
import amor from '../../assets/amor.png';

const ItemDescription = () => {
  return (
    <div className={styleitem.itemContainer}>
      <Navbar />

      <div className={styleitem.content}>
        {/* PRODUCT IMAGE */}
        <div className={styleitem.productimage}>
          <img src={amor} alt="Product" />
        </div>

        {/* PRODUCT DETAILS */}
        <div className={styleitem.productdescription}>
          <h1 className={styleitem.productname}>Amorous Amor</h1>
          <h3 className={styleitem.price}>₱99,999</h3>
          <h2 className={styleitem.description}>
            A lovely arrangement of roses wrapped in delicate blush tones — perfect for someone unforgettable.
          </h2>

          <div className={styleitem.buttongroup}>
            <button type="button" className={styleitem.add}>add to bag</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
