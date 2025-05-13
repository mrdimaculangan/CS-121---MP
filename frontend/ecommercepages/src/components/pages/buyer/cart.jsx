import React from 'react';
import styles from './cart.module.css';
import Navbar from './navbar';
import amor from '../../assets/amor.png'
import bianca from '../../assets/bianca.png'

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Amorous Amor', price: 99999, quantity: 2, image: amor },
    { id: 2, name: 'Bianca Baby', price: 89999, quantity: 1, image: bianca },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <Navbar />

      <div className={styles.cartWrapper}>
        {/* Cart Section */}
        <div className={styles.cartBox}>
          <h2>your cart</h2>
          {cartItems.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemPrice}>₱{item.price}</p>
                <p className={styles.itemQty}>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Receipt Section */}
        <div className={styles.receiptBox}>
          <h2>receipt</h2>
          {cartItems.map((item) => (
            <div className={styles.receiptRow} key={item.id}>
              <span>{item.name} x {item.quantity}</span>
              <span>₱{item.price * item.quantity}</span>
            </div>
          ))}

          <hr />
          <div className={styles.totalRow}>
            <span>total</span>
            <span>₱{total}</span>
          </div>
          <hr />
          <button className={styles.checkoutBtn}>checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
