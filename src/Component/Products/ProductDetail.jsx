import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../CSS/ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading product details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="detail-image" />
      </div>
      <div className="product-info-container">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">${product.price}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;