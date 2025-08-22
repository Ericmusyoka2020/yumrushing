import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TableNumberInputProps {
  onTableSet: (tableNumber: string) => void;
}

const TableNumberInput: React.FC<TableNumberInputProps> = ({ onTableSet }) => {
  const { t, isRTL } = useLanguage();
  const [tableNumber, setTableNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tableNumber.trim()) {
      onTableSet(tableNumber.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-teal-600 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-6 py-3 rounded-lg font-bold text-2xl mb-4 inline-block">
            {t('appName')}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to YumRushing
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t('enterTableNumber')}
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <div className={`flex items-center space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin size={16} />
                <span>{t('tableNumber')}</span>
              </div>
            </label>
            <input
              type="text"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="w-full px-4 py-4 text-lg rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-center"
              placeholder="e.g., 12, A5, Patio 3"
              required
              autoFocus
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <span>Start Ordering</span>
            {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <p>🍽️ Delicious food delivered to your table</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TableNumberInput;