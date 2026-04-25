import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { products as allProducts } from '../data/products';
import { ChevronDown, Filter } from 'lucide-react';

const Products = () => {
  const { category } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('recommended');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  useEffect(() => {
    let result = allProducts.filter(p => searchTerm ? true : p.category === category);
    
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter(p => {
        return selectedPriceRanges.some(range => {
          if (range === '499-2499') return p.price >= 499 && p.price <= 2499;
          if (range === '2499-4499') return p.price > 2499 && p.price <= 4499;
          return true;
        });
      });
    }
    
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [category, sortBy, searchTerm, selectedBrands, selectedPriceRanges]);

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges(prev => 
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedPriceRanges([]);
    setSortBy('recommended');
  };

  return (
    <div className="products-page container animate-fade">
      <div className="breadcrumb">
        Home / {category?.toUpperCase()}
      </div>

      <div className="products-header">
        <h1 className="category-title">{category?.toUpperCase()} - <span className="item-count">{filteredProducts.length} items</span></h1>
        
        <div className="sort-container">
          <span>Sort by: </span>
          <div className="sort-dropdown">
            <button className="dropdown-btn">
              {sortBy.charAt(0).toUpperCase() + sortBy.slice(1).replace('-', ' ')} <ChevronDown size={16} />
            </button>
            <div className="dropdown-content">
              <div onClick={() => setSortBy('recommended')}>Recommended</div>
              <div onClick={() => setSortBy('price-low')}>Price: Low to High</div>
              <div onClick={() => setSortBy('price-high')}>Price: High to Low</div>
              <div onClick={() => setSortBy('rating')}>Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-layout">
        <aside className="filters-sidebar">
          <div className="filter-section">
            <div className="filter-header-main">
              <h4>FILTERS</h4>
              <button className="clear-all" onClick={clearFilters}>CLEAR ALL</button>
            </div>
            
            <div className="filter-group">
              <h5 className="filter-title">BRAND</h5>
              {["Roadster", "H&M", "Levis", "Nike", "Adidas", "Puma"].map(brand => (
                <label key={brand} className="checkbox-container">
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  /> 
                  <span className="checkmark"></span> {brand}
                </label>
              ))}
              <p className="more-link">+ 24 more</p>
            </div>

            <div className="filter-group">
              <h5 className="filter-title">PRICE</h5>
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={selectedPriceRanges.includes('499-2499')}
                  onChange={() => togglePriceRange('499-2499')}
                /> 
                <span className="checkmark"></span> Rs. 499 to Rs. 2499
              </label>
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={selectedPriceRanges.includes('2499-4499')}
                  onChange={() => togglePriceRange('2499-4499')}
                /> 
                <span className="checkmark"></span> Rs. 2499 to Rs. 4499
              </label>
            </div>

            <div className="filter-group">
              <h5 className="filter-title">COLOR</h5>
              <div className="color-filters">
                <span className="color-dot black"></span>
                <span className="color-dot blue"></span>
                <span className="color-dot white"></span>
                <span className="color-dot red"></span>
              </div>
            </div>

            <div className="filter-group">
              <h5 className="filter-title">DISCOUNT RANGE</h5>
              <label className="radio-container">
                <input type="radio" name="discount" /> <span className="radio-mark"></span> 10% and above
              </label>
              <label className="radio-container">
                <input type="radio" name="discount" /> <span className="radio-mark"></span> 20% and above
              </label>
              <label className="radio-container">
                <input type="radio" name="discount" /> <span className="radio-mark"></span> 30% and above
              </label>
            </div>
          </div>
        </aside>

        <main className="product-listing">
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="grid-item animate-slide-up">
                   <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <img src="https://constant.myntassets.com/web/assets/img/0ac60914-972a-4a6c-9419-f9c322d718ad1560940561565-empty-wishlist.png" alt="Empty" />
              <h3>No products found matching your filters.</h3>
              <p>Try clearing your filters to see more results!</p>
            </div>
          )}
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .products-page {
          padding-top: 30px;
        }
        .breadcrumb {
          font-size: 13px;
          color: #282c3f;
          margin-bottom: 25px;
        }
        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 15px;
          margin-bottom: 25px;
        }
        .category-title {
          font-size: 16px;
          font-weight: 700;
          color: #282c3f;
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .item-count {
          font-weight: 400;
          color: #878b94;
          font-size: 16px;
        }
        .sort-container {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }
        .sort-dropdown {
          position: relative;
          display: inline-block;
        }
        .dropdown-btn {
          border: 1px solid #d4d5d9;
          padding: 9px 14px;
          border-radius: 2px;
          background: #fff;
          display: flex;
          align-items: center;
          gap: 40px;
          font-weight: 400;
          font-size: 14px;
          color: #282c3f;
          min-width: 255px;
          justify-content: space-between;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          background: #fff;
          width: 100%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
          border: 1px solid #d4d5d9;
          border-top: none;
        }
        .sort-dropdown:hover .dropdown-content {
          display: block;
        }
        .dropdown-content div {
          padding: 10px 14px;
          cursor: pointer;
          font-size: 14px;
          color: #282c3f;
        }
        .dropdown-content div:hover {
          background: #f5f5f6;
          font-weight: 700;
        }
        .products-layout {
          display: flex;
          gap: 0;
          border-top: 1px solid #edeff2;
        }
        .filters-sidebar {
          width: 260px;
          flex-shrink: 0;
          border-right: 1px solid #edeff2;
          padding: 20px 20px 20px 0;
        }
        .filter-header-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        .filter-header-main h4 {
          font-size: 16px;
          font-weight: 700;
        }
        .clear-all {
          color: var(--primary);
          font-weight: 700;
          font-size: 12px;
        }
        .filter-title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #282c3f;
        }
        .filter-group {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #edeff2;
        }
        .checkbox-container, .radio-container {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #282c3f;
          margin-bottom: 10px;
          cursor: pointer;
          position: relative;
        }
        .more-link {
          color: var(--primary);
          font-size: 14px;
          margin-top: 10px;
          cursor: pointer;
        }
        .color-filters {
          display: flex;
          gap: 8px;
        }
        .color-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid #d4d5d9;
          cursor: pointer;
        }
        .color-dot.black { background: #000; }
        .color-dot.blue { background: #0000ff; }
        .color-dot.white { background: #fff; }
        .color-dot.red { background: #ff0000; }
        
        .product-listing {
          flex: 1;
          padding: 20px 0 20px 25px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 30px 25px;
        }
        .no-products {
          text-align: center;
          padding: 80px 0;
          color: var(--text-muted);
        }
        .no-products img {
          width: 120px;
          margin-bottom: 20px;
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          .filters-sidebar {
            display: none;
          }
          .product-listing {
            padding-left: 0;
          }
        }
      `}} />
    </div>
  );
};

export default Products;