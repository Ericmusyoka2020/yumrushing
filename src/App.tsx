import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import TableNumberInput from './components/TableNumberInput';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function App() {
  const [tableNumber, setTableNumber] = useState<string>('');

  useEffect(() => {
    const savedTableNumber = sessionStorage.getItem('tableNumber');
    if (savedTableNumber) {
      setTableNumber(savedTableNumber);
    }
  }, []);

  const handleTableSet = (table: string) => {
    setTableNumber(table);
    sessionStorage.setItem('tableNumber', table);
  };

  if (!tableNumber) {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <TableNumberInput onTableSet={handleTableSet} />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Header />
              <Routes>
                <Route path="/" element={<Menu tableNumber={tableNumber} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;