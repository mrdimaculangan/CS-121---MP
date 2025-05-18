import React from 'react';
import styles from './cart.module.css';
import Navbar from './navbar';
import { useCart } from 'react-use-cart'; 
import { useState } from 'react';

const Cart = () => {
  const { items,removeItem,cartTotal, updateItemQuantity, emptyCart} = useCart();
  const [successCheckout, setSuccessCheckout] = useState(false);
  const [emptyCartMessage, setEmptyCartMessage] = useState(false);


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
                    disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                  <button 
                    className={styles.removeItem}
                    onClick={() => removeItem(item.id)}>remove</button>
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
          <button
          className={styles.checkoutBtn}
          onClick={() => {
                if (items.length === 0) {
                  setEmptyCartMessage(true);
                } else {
                  setSuccessCheckout(true);
                }}}>checkout</button>    
      </div>
          
       {successCheckout && (
        <div className={styles.messageOverlay}>
        <div className={styles.confirmContent}>
        <h3 className={styles.checkoutconfirm}>Your order has been successfully placed! Thank you for ordering!</h3>
        <button 
          className={styles.closeMessage} 
          onClick={() => {
            emptyCart(); 
            setSuccessCheckout(false);
          }}
        >
          Return to page
        </button>
    </div>
  </div>
    )}
      {emptyCartMessage && (
        <div className={styles.messageOverlay}>
          <div className={styles.confirmContent}>
            <h3 className={styles.checkoutconfirm}>Your cart is empty. Please add items before checking out.</h3>
            <button className={styles.closeMessage} onClick={() => setEmptyCartMessage(false)}>Return to page</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Cart;