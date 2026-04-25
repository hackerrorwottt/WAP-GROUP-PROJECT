import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { products } from '../../data/products';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8); // Limit to top 8 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop/men?search=${searchQuery.trim()}`);
      setIsMenuOpen(false);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (query) => {
    setSearchQuery(query);
    navigate(`/shop/men?search=${query}`);
    setShowSuggestions(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            <img src="https://images.indianexpress.com/2021/01/myntra.png" alt="Myntra" />
          </Link>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/shop/men" className="nav-link">MEN</Link>
            <Link to="/shop/women" className="nav-link">WOMEN</Link>
            <Link to="/shop/kids" className="nav-link">KIDS</Link>
            <Link to="/shop/home-living" className="nav-link">HOME & LIVING</Link>
            <Link to="/shop/beauty" className="nav-link">BEAUTY</Link>
          </div>
        </div>

        <div className="nav-center" ref={dropdownRef}>
          <form className="search-bar" onSubmit={handleSearch}>
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
            />
          </form>

          {showSuggestions && (
            <div className="suggestions-dropdown animate-fade">
              {suggestions.length > 0 ? (
                <>
                  <div className="suggestion-label">TOP RESULTS</div>
                  {suggestions.map((item, index) => (
                    <div
                      key={item.id}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(item.brand)}
                    >
                      <Search size={14} className="suggest-icon" />
                      <div className="suggest-text">
                        <span className="suggest-brand">{item.brand}</span>
                        <span className="suggest-name"> in {item.category}</span>
                      </div>
                      <ArrowRight size={14} className="suggest-arrow" />
                    </div>
                  ))}
                </>
              ) : (
                <div className="no-suggestion">No results found for "{searchQuery}"</div>
              )}
            </div>
          )}
        </div>

        <div className="nav-right">
          <div className="nav-action">
            <User size={20} strokeWidth={2.5} />
            <span>Profile</span>
          </div>
          <Link to="/wishlist" className="nav-action">
            <div className="icon-badge">
              <Heart size={20} strokeWidth={2.5} />
              {wishlistItems.length > 0 && <span className="badge">{wishlistItems.length}</span>}
            </div>
            <span>Wishlist</span>
          </Link>
          <Link to="/cart" className="nav-action">
            <div className="icon-badge">
              <ShoppingBag size={20} strokeWidth={2.5} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </div>
            <span>Bag</span>
          </Link>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .navbar {
          height: 80px;
          background: #fff;
          box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .logo img {
          height: 32px;
          margin-right: 15px;
        }
        .nav-links {
          display: flex;
          gap: 20px;
        }
        .nav-link {
          font-size: 14px;
          font-weight: 700;
          color: #282c3f;
          padding: 28px 0;
          border-bottom: 4px solid transparent;
          transition: border-color 0.2s;
          letter-spacing: 0.3px;
        }
        .nav-link:hover {
          border-bottom-color: var(--primary);
        }
        .nav-center {
          flex: 1;
          max-width: 500px;
          margin: 0 40px;
          position: relative;
        }
        .search-bar {
          background: #f5f5f6;
          display: flex;
          align-items: center;
          padding: 10px 15px;
          border-radius: 4px;
          border: 1px solid transparent;
          transition: background 0.2s, border 0.2s;
        }
        .search-bar:focus-within {
          background: #fff;
          border-color: #eaeaec;
        }
        .search-icon {
          color: #696b79;
          margin-right: 10px;
        }
        .search-bar input {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          font-size: 14px;
          color: #282c3f;
        }
        .search-bar input::placeholder {
          color: #9496a5;
        }

        /* Suggestions Dropdown */
        .suggestions-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border-radius: 0 0 4px 4px;
          z-index: 1001;
          margin-top: 1px;
          border: 1px solid #eaeaec;
          border-top: none;
          overflow: hidden;
        }
        .suggestion-label {
          padding: 12px 15px 8px;
          font-size: 11px;
          font-weight: 700;
          color: #9496a5;
          letter-spacing: 1px;
        }
        .suggestion-item {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          cursor: pointer;
          transition: background 0.2s;
          border-bottom: 1px solid #f5f5f6;
        }
        .suggestion-item:last-child {
          border-bottom: none;
        }
        .suggestion-item:hover {
          background: #f5f5f6;
        }
        .suggest-icon {
          color: #696b79;
          margin-right: 12px;
        }
        .suggest-text {
          flex: 1;
          font-size: 14px;
          color: #282c3f;
        }
        .suggest-brand {
          font-weight: 700;
        }
        .suggest-name {
          color: #696b79;
        }
        .suggest-arrow {
          color: #d4d5d9;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
        }
        .suggestion-item:hover .suggest-arrow {
          opacity: 1;
          transform: translateX(4px);
        }
        .no-suggestion {
          padding: 20px;
          text-align: center;
          color: #9496a5;
          font-size: 14px;
        }
        .nav-right {
          display: flex;
          gap: 28px;
          align-items: center;
        }
        .nav-action {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 700;
          color: #282c3f;
          cursor: pointer;
          transition: color 0.2s;
        }
        .nav-action:hover {
          color: var(--primary);
        }
        .icon-badge {
          position: relative;
        }
        .badge {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #ff3f6c;
          color: #fff;
          font-size: 10px;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          font-weight: 700;
          border: 2px solid #fff;
        }
        .mobile-menu-btn {
          display: none;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background: #fff;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          .nav-links.active {
            display: flex;
          }
          .nav-link {
            padding: 12px 0;
          }
          .nav-center {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;