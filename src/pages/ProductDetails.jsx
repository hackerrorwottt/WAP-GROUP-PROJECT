import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(null);
  
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
    } else {
      setError("Product not found");
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
    navigate('/cart');
  };

  if (error) return <div className="container" style={{padding: '100px 0', textAlign: 'center'}}><h2>{error}</h2></div>;
  if (!product) return <div className="container" style={{padding: '100px 0', textAlign: 'center'}}><h2>Loading...</h2></div>;

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="product-detail-page container animate-fade">
      <div className="breadcrumb">
        Home / {product.category?.toUpperCase()} / {product.brand}
      </div>

      <div className="detail-layout">
        <div className="image-gallery">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} style={{filter: 'hue-rotate(30deg)'}} />
        </div>

        <div className="product-info">
          <h1 className="detail-brand">{product.brand}</h1>
          <h2 className="detail-name">{product.name}</h2>
          
          <div className="detail-rating">
            <span className="rating-box">
              {product.rating} <Star size={16} fill="currentColor" />
            </span>
            <span className="divider">|</span>
            <span className="reviews-count">{product.reviews} Ratings</span>
          </div>

          <div className="detail-price-section">
             <span className="detail-price">Rs. {product.price}</span>
             <span className="detail-original-price">MRP <span className="strike">Rs. {product.originalPrice}</span></span>
             <span className="detail-discount">({product.discount}% OFF)</span>
          </div>

          <p className="tax-info">inclusive of all taxes</p>

          <div className="size-section">
            <div className="size-header">
              <h3>SELECT SIZE</h3>
              <button className="size-chart">SIZE CHART &gt;</button>
            </div>
            <div className="size-options">
              {product.sizes.map(size => (
                <button 
                  key={size} 
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="action-btns">
            <button className="add-to-bag-btn" onClick={handleAddToCart}>
              <ShoppingBag size={20} /> ADD TO BAG
            </button>
            <button className="wishlist-detail-btn" onClick={() => toggleWishlist(product)}>
              <Heart size={20} fill={isWishlisted ? "var(--primary)" : "none"} color={isWishlisted ? "var(--primary)" : "currentColor"} /> 
              {isWishlisted ? 'WISHLISTED' : 'WISHLIST'}
            </button>
          </div>

          <div className="delivery-options">
            <h3>DELIVERY OPTIONS <Truck size={20} /></h3>
            <div className="pincode-check">
              <input type="text" placeholder="Enter pincode" />
              <button>Check</button>
            </div>
            <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            
            <ul className="service-list">
              <li><Truck size={18} /> 100% Original Products</li>
              <li><RefreshCw size={18} /> Pay on delivery might be available</li>
              <li><ShieldCheck size={18} /> Easy 14 days returns and exchanges</li>
            </ul>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-detail-page {
          padding-top: 20px;
        }
        .detail-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
          margin-top: 30px;
        }
        .image-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .image-gallery img {
          width: 100%;
          border-radius: 4px;
        }
        .product-info {
          padding-left: 20px;
        }
        .detail-brand {
          font-size: 24px;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 5px;
        }
        .detail-name {
          font-size: 20px;
          color: var(--text-muted);
          font-weight: 400;
          margin-bottom: 20px;
        }
        .detail-rating {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid var(--border-light);
          padding: 4px 10px;
          width: fit-content;
          margin-bottom: 20px;
          font-weight: 700;
        }
        .rating-box {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .detail-price-section {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 5px;
        }
        .detail-price {
          font-size: 24px;
          font-weight: 700;
        }
        .detail-original-price {
          font-size: 18px;
          color: var(--text-muted);
        }
        .strike {
          text-decoration: line-through;
        }
        .detail-discount {
          font-size: 18px;
          color: #ff905a;
          font-weight: 700;
        }
        .tax-info {
          color: #03a685;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        .size-section {
          margin-bottom: 40px;
        }
        .size-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        .size-header h3 {
          font-size: 16px;
          font-weight: 700;
        }
        .size-chart {
          color: var(--primary);
          font-weight: 700;
          font-size: 14px;
        }
        .size-options {
          display: flex;
          gap: 15px;
        }
        .size-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid var(--border-light);
          background: #fff;
          font-weight: 700;
          transition: var(--transition);
        }
        .size-btn:hover {
          border-color: var(--primary);
        }
        .size-btn.active {
          border-color: var(--primary);
          color: var(--primary);
        }
        .action-btns {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }
        .add-to-bag-btn {
          flex: 1.5;
          background: var(--primary);
          color: #fff;
          padding: 16px;
          border-radius: 4px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .wishlist-detail-btn {
          flex: 1;
          border: 1px solid var(--border-light);
          padding: 16px;
          border-radius: 4px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .delivery-options {
          padding-top: 30px;
          border-top: 1px solid var(--border-light);
        }
        .delivery-options h3 {
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .pincode-check {
          display: flex;
          border: 1px solid var(--border-light);
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .pincode-check input {
          flex: 1;
          border: none;
          outline: none;
        }
        .pincode-check button {
          color: var(--primary);
          font-weight: 700;
        }
        .service-list {
          margin-top: 25px;
        }
        .service-list li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .detail-layout {
            grid-template-columns: 1fr;
          }
          .image-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
};

export default ProductDetail;
