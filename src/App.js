// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Demo from './pages/Demo'; // Import Demo page

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;