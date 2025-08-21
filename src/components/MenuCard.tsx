import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  const { language, t, isRTL } = useLanguage();
  const { addToCart } = useCart();

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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(item)}
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
            <span className="text-sm">{t('addToCart')}</span>
          </motion.button>
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