import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShieldCheck, Bookmark, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handlePlaceOrder = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="order-success container animate-slide-up">
        <CheckCircle size={80} color="#03a685" />
        <h2>Order Placed Successfully!</h2>
        <p>Your order for Rs. {cartTotal + 99} has been confirmed.</p>
        <Link to="/" className="shop-btn">CONTINUE SHOPPING</Link>
        <style dangerouslySetInnerHTML={{ __html: `
          .order-success { text-align: center; padding: 100px 0; display: flex; flex-direction: column; align-items: center; gap: 20px; }
          .order-success h2 { font-size: 24px; color: #282c3f; }
          .order-success p { color: var(--text-muted); margin-bottom: 20px; }
        `}} />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-simple container">
        <h1>Your bag is empty</h1>
        <Link to="/" className="shop-link">Back to Shop</Link>
        <style dangerouslySetInnerHTML={{ __html: `
          .empty-cart-simple {
            height: calc(100vh - 200px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #282c3f;
          }
          .empty-cart-simple h1 {
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

  const convenienceFee = cartTotal > 0 ? 99 : 0;
  const totalAmount = cartTotal + convenienceFee;

  return (
    <div className="cart-page container animate-fade">
      <div className="cart-layout">
        <div className="cart-items-section">
          <div className="cart-header-actions">
             <h4>Check Delivery Services</h4>
             <button className="enter-pincode">ENTER PINCODE</button>
          </div>

          <div className="offers-section">
            <h4>Available Offers</h4>
            <ul>
              <li>10% Instant Discount on ICICI Bank Credit Cards on a min spends of Rs 3,500. TCA</li>
            </ul>
          </div>

          <div className="items-list">
             <h3>My Shopping Bag ({cartItems.length} Items)</h3>
             {cartItems.map((item, index) => (
               <div key={`${item.id}-${item.size}-${index}`} className="cart-item">
                 <div className="item-image">
                    <img src={item.image} alt={item.name} />
                 </div>
                 <div className="item-details">
                    <div className="item-top">
                       <h4 className="item-brand">{item.brand}</h4>
                       <h5 className="item-name">{item.name}</h5>
                    </div>
                    <div className="item-selection">
                       <span className="selection-box">Size: {item.size}</span>
                       <div className="quantity-control">
                          <button onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
                       </div>
                    </div>
                    <div className="item-price">
                       <span className="current-price">Rs. {item.price * item.quantity}</span>
                       <span className="original-price">Rs. {item.originalPrice * item.quantity}</span>
                       <span className="discount">{item.discount}% OFF</span>
                    </div>
                    <div className="return-policy">
                       <span className="return-icon">⟲</span> <strong>14 days</strong> return available
                    </div>
                 </div>
                 <button className="remove-item" onClick={() => removeFromCart(item.id, item.size)}>
                    <X size={20} />
                 </button>
               </div>
             ))}
          </div>
        </div>

        <div className="price-details-section">
          <h4>PRICE DETAILS ({cartItems.length} Items)</h4>
          <div className="price-row">
            <span>Total MRP</span>
            <span>Rs. {cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0)}</span>
          </div>
          <div className="price-row">
            <span>Discount on MRP</span>
            <span className="text-green">-Rs. {cartItems.reduce((acc, item) => acc + (item.originalPrice - item.price) * item.quantity, 0)}</span>
          </div>
          <div className="price-row">
            <span>Convenience Fee</span>
            <span>Rs. {convenienceFee}</span>
          </div>
          <div className="total-row">
            <span>Total Amount</span>
            <span>Rs. {totalAmount}</span>
          </div>
          <button className="place-order-btn" onClick={handlePlaceOrder}>PLACE ORDER</button>
          
          <div className="cart-trust">
            <ShieldCheck size={20} /> 100% SECURE PAYMENTS
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cart-page { padding-top: 40px; }
        .cart-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; }
        
        .empty-cart { text-align: center; padding: 60px 0; }
        .empty-cart img { width: 150px; margin-bottom: 20px; }
        .empty-cart h3 { margin-bottom: 10px; }
        .empty-cart p { color: var(--text-muted); margin-bottom: 30px; }
        .shop-btn { border: 1px solid var(--primary); color: var(--primary); padding: 12px 24px; font-weight: 700; border-radius: 4px; }

        .cart-header-actions { display: flex; justify-content: space-between; align-items: center; padding: 15px; border: 1px solid var(--border-light); border-radius: 4px; margin-bottom: 20px; }
        .enter-pincode { color: var(--primary); font-weight: 700; border: 1px solid var(--primary); padding: 5px 15px; border-radius: 4px; font-size: 12px; }
        
        .offers-section { padding: 15px; border: 1px solid var(--border-light); border-radius: 4px; margin-bottom: 30px; }
        .offers-section h4 { font-size: 14px; margin-bottom: 10px; }
        .offers-section ul { padding-left: 20px; color: var(--text-muted); font-size: 12px; }

        .items-list h3 { font-size: 18px; margin-bottom: 20px; }
        .cart-item { display: flex; padding: 15px; border: 1px solid var(--border-light); border-radius: 4px; margin-bottom: 15px; position: relative; }
        .item-image img { width: 110px; aspect-ratio: 3/4; object-fit: cover; border-radius: 2px; }
        .item-details { padding-left: 15px; flex: 1; }
        .item-brand { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
        .item-name { font-size: 14px; color: var(--text-muted); font-weight: 400; margin-bottom: 10px; }
        
        .item-selection { display: flex; gap: 15px; margin-bottom: 12px; }
        .selection-box { background: var(--bg-offset); padding: 2px 8px; font-size: 12px; font-weight: 700; border-radius: 2px; }
        .quantity-control { display: flex; align-items: center; background: var(--bg-offset); border-radius: 2px; }
        .quantity-control button { padding: 2px 8px; font-weight: 700; }
        .quantity-control span { font-size: 12px; font-weight: 700; min-width: 20px; text-align: center; }

        .item-price { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .current-price { font-weight: 700; font-size: 14px; }
        .original-price { font-size: 12px; color: var(--text-muted); text-decoration: line-through; }
        .discount { font-size: 12px; color: #ff905a; font-weight: 700; }

        .return-policy { font-size: 12px; }
        .remove-item { position: absolute; top: 10px; right: 10px; color: var(--text-muted); }

        .price-details-section { border-left: 1px solid var(--border-light); padding-left: 30px; }
        .price-details-section h4 { font-size: 12px; color: var(--text-muted); margin-bottom: 20px; }
        .price-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
        .text-green { color: #03a685; }
        .total-row { display: flex; justify-content: space-between; margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border-light); font-weight: 700; font-size: 16px; margin-bottom: 30px; }
        
        .place-order-btn { width: 100%; background: var(--primary); color: #fff; padding: 15px; border-radius: 4px; font-weight: 700; font-size: 14px; margin-bottom: 20px; }
        .cart-trust { display: flex; align-items: center; gap: 10px; justify-content: center; font-size: 12px; color: var(--text-muted); border-top: 1px solid var(--border-light); padding-top: 20px; }

        @media (max-width: 768px) {
          .cart-layout { grid-template-columns: 1fr; }
          .price-details-section { border-left: none; padding-left: 0; margin-top: 40px; }
        }
      `}} />
    </div>
  );
};

export default Cart;
