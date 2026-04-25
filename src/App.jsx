import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Wishlist = lazy(() => import('./pages/Wishlist'))
const NotFound = lazy(() => import('./pages/NotFound'))

import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'

const Loading = () => <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff3f6c', fontWeight: 700 }}>Loading...</div>;

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <div className="app">
            <Navbar />
            <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop/:category" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  )
}

export default App