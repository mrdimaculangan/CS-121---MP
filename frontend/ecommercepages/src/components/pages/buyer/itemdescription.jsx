import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Navbar from './navbar';
import styleitem from './itemdescription.module.css';

const ItemDescription = () => {
  const { id } = useParams(); // Get product ID from URL
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}/`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Failed to fetch product:", err));
  }, [id]);

  if (!product) {
    return <div className={styleitem.itemContainer}>Loading...</div>;
  }

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
              onClick={() => addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
              })}>
              add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
