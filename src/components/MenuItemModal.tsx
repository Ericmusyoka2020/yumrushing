import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Clock, AlertTriangle } from 'lucide-react';
import { MenuItem, MenuItemOption, OptionChoice } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface MenuItemModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, isOpen, onClose }) => {
  const { language, t, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleOptionChange = (optionId: string, choiceId: string, isMultiple: boolean) => {
    setSelectedOptions(prev => {
      if (isMultiple) {
        const current = prev[optionId] || [];
        const updated = current.includes(choiceId)
          ? current.filter(id => id !== choiceId)
          : [...current, choiceId];
        return { ...prev, [optionId]: updated };
      } else {
        return { ...prev, [optionId]: [choiceId] };
      }
    });
  };

  const calculateTotalPrice = () => {
    let basePrice = item.price * quantity;
    let optionsPrice = 0;

    if (item.options) {
      item.options.forEach(option => {
        const selectedChoices = selectedOptions[option.id] || [];
        selectedChoices.forEach(choiceId => {
          const choice = option.choices.find(c => c.id === choiceId);
          if (choice) {
            optionsPrice += choice.price * quantity;
          }
        });
      });
    }

    return basePrice + optionsPrice;
  };

  const canAddToCart = () => {
    if (!item.options) return true;
    
    return item.options.every(option => {
      if (!option.required) return true;
      const selected = selectedOptions[option.id] || [];
      return selected.length > 0;
    });
  };

  const handleAddToCart = () => {
    if (!canAddToCart()) return;

    const cartItem = {
      ...item,
      quantity,
      selectedOptions,
      specialInstructions: specialInstructions.trim() || undefined
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(cartItem);
    }

    onClose();
    setQuantity(1);
    setSelectedOptions({});
    setSpecialInstructions('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.name[language]}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-2xl font-bold text-orange-500">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Title and Description */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {item.name[language]}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description[language]}
              </p>
            </div>

            {/* Info Cards */}
            <div className={`grid grid-cols-2 gap-4 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {item.preparationTime && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <div className={`flex items-center space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock size={16} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      {t('preparationTime')}
                    </span>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                    {item.preparationTime} min
                  </p>
                </div>
              )}

              {item.allergens && item.allergens.length > 0 && (
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                  <div className={`flex items-center space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <AlertTriangle size={16} className="text-orange-600 dark:text-orange-400" />
                    <span className="text-sm font-medium text-orange-900 dark:text-orange-100">
                      {t('allergens')}
                    </span>
                  </div>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mt-1 capitalize">
                    {item.allergens.join(', ')}
                  </p>
                </div>
              )}
            </div>

            {/* Options */}
            {item.options && item.options.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t('options')}
                </h3>
                <div className="space-y-6">
                  {item.options.map((option) => (
                    <div key={option.id} className="border dark:border-gray-600 rounded-lg p-4">
                      <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {option.name[language]}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          option.required 
                            ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                          {option.required ? t('required') : t('optional')}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {option.choices.map((choice) => {
                          const isSelected = (selectedOptions[option.id] || []).includes(choice.id);
                          return (
                            <label
                              key={choice.id}
                              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                              } ${isRTL ? 'flex-row-reverse' : ''}`}
                            >
                              <div className={`flex items-center space-x-3 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <input
                                  type={option.type === 'multiple' ? 'checkbox' : 'radio'}
                                  name={option.id}
                                  checked={isSelected}
                                  onChange={() => handleOptionChange(option.id, choice.id, option.type === 'multiple')}
                                  className="text-orange-500 focus:ring-orange-500"
                                />
                                <span className="text-gray-900 dark:text-white">
                                  {choice.name[language]}
                                </span>
                              </div>
                              {choice.price > 0 && (
                                <span className="text-orange-500 font-medium">
                                  +${choice.price.toFixed(2)}
                                </span>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('specialInstructions')}
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="Any special requests or modifications..."
              />
            </div>

            {/* Quantity and Add to Cart */}
            <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center space-x-4 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t('quantity')}:
                </span>
                <div className={`flex items-center space-x-2 rtl:space-x-reverse bg-gray-100 dark:bg-gray-700 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: canAddToCart() ? 1.02 : 1 }}
                whileTap={{ scale: canAddToCart() ? 0.98 : 1 }}
                onClick={handleAddToCart}
                disabled={!canAddToCart()}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  canAddToCart()
                    ? 'bg-gradient-to-r from-orange-500 to-teal-600 text-white hover:shadow-lg'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {t('addToCart')} - ${calculateTotalPrice().toFixed(2)}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuItemModal;