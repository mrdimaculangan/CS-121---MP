// src/components/Cart.js
import React from 'react';
import styles from './cart.module.css';
import Navbar from './navbar';
import { useCart } from 'react-use-cart'; 

const Cart = () => {
  const { 
    items,             
    removeItem,          
    cartTotal,           
  } = useCart();

  return (
    <div className={styles.cartContainer}>
      <Navbar />

      <div className={styles.cartWrapper}>
        {/* Cart Section */}
        <div className={styles.cartBox}>
          <h2>your cart</h2>
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div className={styles.cartItem} key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>₱{item.price}</p>
                  <p className={styles.itemQty}>Qty: {item.quantity}</p>
                  <button 
                    className={styles.removeItem}
                    onClick={() => removeItem(item.id)} 
                  >
                    remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Receipt Section */}
        <div className={styles.receiptBox}>
          <h2>receipt</h2>
          {items.map((item) => (
            <div className={styles.receiptRow} key={item.id}>
              <span>{item.name} x {item.quantity}</span>
              <span>₱{item.itemTotal}</span> {/* itemTotal = price * quantity */}
            </div>
          ))}

          <hr />
          <div className={styles.totalRow}>
            <span>total</span>
            <span>₱{cartTotal}</span> {/* Pre-calculated total */}
          </div>
          <hr />
          <button className={styles.checkoutBtn}>checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;