import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Men', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', path: 'men' },
  { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', path: 'women' },
  { name: 'Kids', image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', path: 'kids' },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', path: 'home-living' },
  { name: 'Footwear', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', path: 'footwear' },
  { name: 'Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', path: 'beauty' }
];

const CategoryRail = () => {
  const navigate = useNavigate();

  return (
    <div className="category-rail">
      <h2 className="section-title">SHOP BY CATEGORY</h2>
      <div className="rail-container">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="category-card"
            onClick={() => navigate(`/shop/${cat.path}`)}
          >
            <div className="cat-image">
              <img src={cat.image} alt={cat.name} />
            </div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .rail-container {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding-bottom: 20px;
          scrollbar-width: none;
        }
        .rail-container::-webkit-scrollbar {
          display: none;
        }
        .category-card {
          flex: 0 0 150px;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 10px;
          border-radius: var(--radius-md);
        }
        .category-card:hover {
          transform: scale(1.05);
          background: #fff;
          box-shadow: var(--shadow-sm);
        }
        .cat-image {
          width: 100%;
          aspect-ratio: 1/1;
          overflow: hidden;
          border-radius: 50%;
          margin-bottom: 12px;
          border: 1px solid #edeff2;
        }
        .cat-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .category-card p {
          text-align: center;
          font-weight: 600;
          font-size: 13px;
          color: #282c3f;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}} />
    </div>
  );
};

export default CategoryRail;