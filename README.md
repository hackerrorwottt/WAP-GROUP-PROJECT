# Myntra Frontend Clone 🚀

A high-fidelity, production-ready e-commerce frontend clone of Myntra, built with **React**, **Vite**, and **Context API**. This project features a premium UI/UX, predictive search, advanced filtering, and a complete shopping experience from product discovery to checkout.

## ✨ Key Features

- **🛍️ Product Discovery**: Explore a catalog of 96+ products across categories like Men, Women, Kids, Beauty, Home & Living, and Footwear.
- **🔍 Predictive Search**: Real-time search suggestions dropdown with brand and category context in the Navbar.
- **🏷️ Smart Filtering**: Fully functional sidebar filters for Brands and Price ranges, with a reactive "Clear All" mechanism.
- **💖 Wishlist System**: Add items to your favorites with a minimalist centered "Empty Wishlist" state.
- **🛒 Shopping Bag**: Global state management for your cart with quantity updates, total price calculations, and persistent storage.
- **✨ Premium UI/UX**: 
  - Dynamic 0.2s hover transitions on product cards.
  - Category icons with circular hover scaling.
  - Hero banners with subtle zoom animations.
  - High-resolution, category-relevant imagery throughout the app.
- **📱 Fully Responsive**: Optimized for seamless experiences across Desktop, Tablet, and Mobile devices.
- **⚡ Performance First**: Implemented route-based code splitting (`React.lazy`) and component memoization for a snappy feel.

## 🛠️ Technology Stack

- **Frontend**: React (Vite)
- **Routing**: React Router DOM (v6)
- **State Management**: Context API (Providers for Cart & Wishlist)
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (CSS Variables for a consistent design system)
- **Data**: Centralized product database for easy expansion.

## 📁 Project Structure

```text
src/
├── components/
│   ├── common/         # Reusable UI (ProductCard)
│   ├── home/           # Home specific (Hero, CategoryRail)
│   └── layout/         # Layout components (Navbar, Footer)
├── context/            # Global state (CartContext, WishlistContext)
├── data/               # Product database (products.js)
├── pages/              # Route parents (Home, Products, Detail, Cart, Wishlist)
├── styles/             # Global design system (index.css)
└── App.jsx             # Routing and App Logic
```
