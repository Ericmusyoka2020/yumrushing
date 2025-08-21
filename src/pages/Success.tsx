import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Utensils, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Success: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const orderData = location.state?.orderData;
  const customerName = location.state?.customerName;
  const tableNumber = location.state?.tableNumber;

  useEffect(() => {
    // Optional: Add confetti or celebration animation here
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1
          }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              <CheckCircle size={64} className="mx-auto" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold mb-2"
            >
              {t('orderSuccess')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="opacity-90"
            >
              {t('orderSuccessMessage')}
            </motion.p>
          </div>

          {/* Order Details */}
          <div className="p-6">
            {customerName && tableNumber && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Order Details</h3>
                <div className="space-y-2 text-sm">
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-gray-600 dark:text-gray-400">Customer:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{customerName}</span>
                  </div>
                  <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-gray-600 dark:text-gray-400">Table:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{tableNumber}</span>
                  </div>
                  {orderData && (
                    <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-gray-600 dark:text-gray-400">Total:</span>
                      <span className="font-bold text-orange-500">${orderData.totalAmount?.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Status Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4 mb-6"
            >
              <div className={`flex items-center space-x-4 rtl:space-x-reverse p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full">
                  <Clock className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Estimated Time</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">15-25 minutes</p>
                </div>
              </div>

              <div className={`flex items-center space-x-4 rtl:space-x-reverse p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="bg-orange-100 dark:bg-orange-800 p-2 rounded-full">
                  <Utensils className="text-orange-600 dark:text-orange-400" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100">Kitchen Status</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Order received & preparing</p>
                </div>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
                  <span>{t('backToMenu')}</span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4"
            >
              Thank you for choosing {t('appName')}! 🍽️
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;