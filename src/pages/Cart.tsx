import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { cartItems, getTotalPrice, getTotalItems } = useCart();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-8xl mb-6"
          >
            🛒
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('emptyCart')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('startOrdering')}
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center space-x-2 rtl:space-x-reverse mx-auto"
            >
              <ShoppingBag size={20} />
              <span>{t('menu')}</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t('cart')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {totalItems} items in your order
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div layout className="space-y-4">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600 dark:text-gray-400">Items ({totalItems})</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-600 dark:text-gray-400">Service</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Free</span>
                </div>
                <hr className="dark:border-gray-600" />
                <div className={`flex justify-between text-lg font-bold ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-gray-900 dark:text-white">{t('total')}</span>
                  <span className="text-orange-500">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span>{t('checkout')}</span>
                  {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </motion.button>
              </Link>

              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;