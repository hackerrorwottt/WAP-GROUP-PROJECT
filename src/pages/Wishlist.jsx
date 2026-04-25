import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="empty-wishlist-simple container">
        <h1>Wishlist is empty</h1>
        <Link to="/" className="shop-link">Continue Shopping</Link>
        <style dangerouslySetInnerHTML={{ __html: `
          .empty-wishlist-simple {
            height: calc(100vh - 200px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #282c3f;
          }
          .empty-wishlist-simple h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .shop-link {
            color: var(--primary);
            font-weight: 700;
            text-decoration: underline;
            font-size: 14px;
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="wishlist-page container animate-fade">
      <h2 className="wishlist-title">My Wishlist <span>({wishlistItems.length} items)</span></h2>
      <div className="wishlist-grid">
        {wishlistItems.map(product => (
          <div key={product.id} className="wishlist-item-wrapper">
             <ProductCard product={product} />
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .wishlist-page { padding-top: 40px; }
        .wishlist-title { font-size: 18px; font-weight: 700; margin-bottom: 40px; }
        .wishlist-title span { font-weight: 400; color: var(--text-muted); }
        
        .empty-wishlist { padding-top: 40px; text-align: center; }
        .empty-content { display: flex; flex-direction: column; align-items: center; margin-top: 50px; }
        .empty-content h3 { margin-bottom: 15px; font-size: 18px; }
        .empty-content p { color: var(--text-muted); max-width: 400px; margin-bottom: 40px; }
        .empty-content img { width: 150px; margin-bottom: 40px; opacity: 0.5; }
        .continue-btn { border: 1px solid var(--primary); color: var(--primary); padding: 15px 30px; font-weight: 700; border-radius: 4px; }

        .wishlist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 30px; }
        
        @media (max-width: 600px) {
          .wishlist-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
      `}} />
    </div>
  );
};

export default Wishlist;