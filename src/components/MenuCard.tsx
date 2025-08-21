import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Settings } from 'lucide-react';
import { MenuItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface MenuCardProps {
  item: MenuItem;
  index: number;
  onCustomize?: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index, onCustomize }) => {
  const { language, t, isRTL } = useLanguage();
  const { addToCart } = useCart();

  const hasOptions = item.options && item.options.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name[language]}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className={`flex justify-between items-start mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">
            {item.name[language]}
          </h3>
          <span className="text-2xl font-bold text-orange-500 ml-2 rtl:ml-0 rtl:mr-2">
            ${item.price}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description[language]}
        </p>

        <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {t(`categories.${item.category}`)}
          </span>

          <div className={`flex space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
            {hasOptions && onCustomize && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCustomize(item)}
                disabled={!item.available}
                className={`
                  flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-lg font-medium transition-all duration-200
                  ${item.available
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <Settings size={14} />
                <span className="text-sm">{t('customize')}</span>
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => hasOptions && onCustomize ? onCustomize(item) : addToCart(item)}
              disabled={!item.available}
              className={`
                flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg font-medium transition-all duration-200
                ${item.available
                  ? 'bg-gradient-to-r from-orange-500 to-teal-600 text-white hover:shadow-lg hover:from-orange-600 hover:to-teal-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              <Plus size={16} />
              <span className="text-sm">
                {hasOptions && onCustomize ? t('customize') : t('addToCart')}
              </span>
            </motion.button>
          </div>
        </div>

        {!item.available && (
          <div className="mt-2 text-center">
            <span className="text-red-500 text-xs font-medium">Currently Unavailable</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;