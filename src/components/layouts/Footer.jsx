import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>ONLINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>CUSTOMER POLICIES</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
          <div className="app-links">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Apple Store" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 www.myntra.com. All rights reserved.</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          background: #fafbfc;
          padding: 60px 0 20px;
          margin-top: 60px;
          border-top: 1px solid var(--border-light);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }
        .footer-col h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 20px;
        }
        .footer-col ul li {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 8px;
          cursor: pointer;
        }
        .footer-col ul li:hover {
          color: var(--secondary);
        }
        .app-links {
          display: flex;
          gap: 12px;
          margin-top: 15px;
        }
        .app-links img {
          height: 40px;
          width: auto;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 60px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
          color: var(--text-muted);
          font-size: 14px;
        }
      `}} />
    </footer>
  );
};

export default Footer;
