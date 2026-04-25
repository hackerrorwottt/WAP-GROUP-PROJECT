import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found container animate-slide-up">
      <img src="https://constant.myntassets.com/web/assets/img/0ac60914-972a-4a6c-9419-f9c322d718ad1560940561565-empty-wishlist.png" alt="404" />
      <h2>Page Not Found</h2>
      <p>We couldn't find the page you were looking for. Let's get you back to shopping!</p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>GO TO HOME</Link>
      <style dangerouslySetInnerHTML={{ __html: `
        .not-found {
          text-align: center;
          padding: 100px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .not-found h2 { font-size: 28px; font-weight: 700; color: #282c3f; }
        .not-found p { color: #9496a5; max-width: 400px; margin-bottom: 20px; }
      `}} />
    </div>
  );
};

export default NotFound;