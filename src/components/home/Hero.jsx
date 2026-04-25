import React from 'react';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-banner">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
          alt="Premium Collection" 
        />
        <div className="hero-overlay"></div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          margin-top: 20px;
          margin-bottom: 40px;
          overflow: hidden;
        }
        .hero-banner {
          position: relative;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .hero-banner img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 10s ease;
        }
        .hero-banner:hover img {
          transform: scale(1.05);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
          pointer-events: none;
        }
      `}} />
    </div>
  );
};

export default Hero;