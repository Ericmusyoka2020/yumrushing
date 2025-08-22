import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { language, t, isRTL } = useLanguage();
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
    >
      <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name[language]}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-white truncate">
            {item.name[language]}
          </h4>
          {item.specialInstructions && (
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {item.specialInstructions}
            </p>
          )}
        </div>

        <div className={`flex items-center space-x-3 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center space-x-2 rtl:space-x-reverse bg-gray-100 dark:bg-gray-700 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
            >
              <Minus size={16} />
            </motion.button>
            
            <span className="px-3 py-1 min-w-[2rem] text-center font-semibold">
              {item.quantity}
            </span>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
            >
              <Plus size={16} />
            </motion.button>
          </div>


          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => removeFromCart(item.id)}
            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
            title={t('removeFromCart')}
          >
            <Trash2 size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;