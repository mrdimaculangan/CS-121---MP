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
    updateItemQuantity          
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
                  <div className={styles.quantityControls}>
                  <button 
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >-</button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>
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
              <span>₱{item.quantity * item.price}</span>{/* itemTotal = price * quantity */}
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