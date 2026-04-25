import React from 'react';
import Hero from '../components/home/Hero';
import CategoryRail from '../components/home/CategoryRail';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';

const Home = () => {
  return (
    <div className="home-page animate-fade">
      <Hero />
      <div className="container">
        <CategoryRail />
        
        <section className="featured-section">
          <h2 className="section-title">DEALS OF THE DAY</h2>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="featured-section">
          <h2 className="section-title">BEST OF MYNTRA</h2>
          <div className="product-grid">
            {[...products].reverse().map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .section-title {
          font-size: 24px;
          letter-spacing: 4px;
          font-weight: 700;
          color: #3e4152;
          margin: 60px 0 30px;
          text-transform: uppercase;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 30px;
        }
        @media (max-width: 600px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
      `}} />
    </div>
  );
};

export default Home;