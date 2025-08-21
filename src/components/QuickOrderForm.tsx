import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { QuickOrderItem } from '../types';

interface QuickOrderFormProps {
  onSubmit: (items: QuickOrderItem[]) => void;
  onCancel: () => void;
}

const QuickOrderForm: React.FC<QuickOrderFormProps> = ({ onSubmit, onCancel }) => {
  const { t, isRTL } = useLanguage();
  const [quickItems, setQuickItems] = useState<QuickOrderItem[]>([
    { itemName: '', quantity: 1, specifications: '', estimatedPrice: 0 }
  ]);

  const addQuickItem = () => {
    setQuickItems([...quickItems, { itemName: '', quantity: 1, specifications: '', estimatedPrice: 0 }]);
  };

  const removeQuickItem = (index: number) => {
    if (quickItems.length > 1) {
      setQuickItems(quickItems.filter((_, i) => i !== index));
    }
  };

  const updateQuickItem = (index: number, field: keyof QuickOrderItem, value: string | number) => {
    const updated = quickItems.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setQuickItems(updated);
  };

  const getTotalEstimated = () => {
    return quickItems.reduce((total, item) => total + (item.estimatedPrice * item.quantity), 0);
  };

  const canSubmit = () => {
    return quickItems.every(item => 
      item.itemName.trim() && 
      item.quantity > 0 && 
      item.estimatedPrice >= 0
    );
  };

  const handleSubmit = () => {
    if (canSubmit()) {
      onSubmit(quickItems.filter(item => item.itemName.trim()));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {t('quickOrder')}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('quickOrderDescription')}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {quickItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border dark:border-gray-600 rounded-lg p-4"
          >
            <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Item #{index + 1}
              </h4>
              {quickItems.length > 1 && (
                <button
                  onClick={() => removeQuickItem(index)}
                  className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('itemName')} *
                </label>
                <input
                  type="text"
                  value={item.itemName}
                  onChange={(e) => updateQuickItem(index, 'itemName', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="e.g., Grilled Chicken, Caesar Salad"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('estimatedPrice')} *
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.estimatedPrice}
                  onChange={(e) => updateQuickItem(index, 'estimatedPrice', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="0.00"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('specifications')}
                </label>
                <textarea
                  value={item.specifications}
                  onChange={(e) => updateQuickItem(index, 'specifications', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Size, cooking preference, modifications, etc."
                />
              </div>

              <div className={`flex items-center space-x-3 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('quantity')}:
                </label>
                <div className={`flex items-center space-x-2 rtl:space-x-reverse bg-gray-100 dark:bg-gray-700 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => updateQuickItem(index, 'quantity', Math.max(1, item.quantity - 1))}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 py-1 min-w-[2rem] text-center font-semibold text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuickItem(index, 'quantity', item.quantity + 1)}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className={`flex items-center justify-end ${isRTL ? 'justify-start' : ''}`}>
                <div className="text-right rtl:text-left">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal:</span>
                  <div className="text-lg font-bold text-orange-500">
                    ${(item.estimatedPrice * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <button
          onClick={addQuickItem}
          className="flex items-center space-x-2 rtl:space-x-reverse text-orange-500 hover:text-orange-600 font-medium transition-colors"
        >
          <Plus size={16} />
          <span>{t('addQuickItem')}</span>
        </button>

        <div className="text-right rtl:text-left">
          <span className="text-sm text-gray-600 dark:text-gray-400">Estimated Total:</span>
          <div className="text-2xl font-bold text-orange-500">
            ${getTotalEstimated().toFixed(2)}
          </div>
        </div>
      </div>

      <div className={`flex space-x-4 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCancel}
          className="flex-1 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
          Cancel
        </motion.button>

        <motion.button
          whileHover={{ scale: canSubmit() ? 1.02 : 1 }}
          whileTap={{ scale: canSubmit() ? 0.98 : 1 }}
          onClick={handleSubmit}
          disabled={!canSubmit()}
          className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse ${
            canSubmit()
              ? 'bg-gradient-to-r from-orange-500 to-teal-600 text-white hover:shadow-lg'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          <ShoppingBag size={16} />
          <span>Continue to Checkout</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuickOrderForm;