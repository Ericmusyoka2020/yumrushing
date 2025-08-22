import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import { Language } from '../types';

const Header: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'yi', name: 'ייִדיש', flag: '🇮🇱' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];


  const totalItems = getTotalItems();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-4">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-4 py-2 rounded-lg font-bold text-xl"
            >
              {t('appName')}
            </motion.div>
          </Link>

          {/* Navigation */}
          <nav className={`hidden md:flex items-center space-x-6 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/"
              className={`text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors ${
                location.pathname === '/' ? 'text-orange-500 font-semibold' : ''
              }`}
            >
              {t('menu')}
            </Link>
            <Link
              to="/cart"
              className={`relative text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors ${
                location.pathname === '/cart' ? 'text-orange-500 font-semibold' : ''
              }`}
            >
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <ShoppingCart size={20} />
                <span>{t('cart')}</span>
              </div>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
          </nav>

          {/* Controls */}
          <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              title={theme === 'dark' ? t('lightMode') : t('darkMode')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors flex items-center space-x-1 rtl:space-x-reverse"
              >
                <Languages size={20} />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === language)?.flag}
                </span>
              </motion.button>

              {showLanguageMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50`}
                >
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguageMenu(false);
                        }}
                        className={`w-full px-4 py-2 text-left rtl:text-right flex items-center space-x-3 rtl:space-x-reverse hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          language === lang.code ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Mobile Cart Icon */}
            <Link
              to="/cart"
              className="md:hidden relative p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t dark:border-gray-700 px-4 py-2">
        <div className={`flex justify-center space-x-8 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link
            to="/"
            className={`py-2 text-sm ${
              location.pathname === '/' 
                ? 'text-orange-500 font-semibold border-b-2 border-orange-500' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {t('menu')}
          </Link>
          <Link
            to="/cart"
            className={`py-2 text-sm ${
              location.pathname === '/cart' 
                ? 'text-orange-500 font-semibold border-b-2 border-orange-500' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {t('cart')}
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;