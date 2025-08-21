import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Zap, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import MenuCard from '../components/MenuCard';
import MenuItemModal from '../components/MenuItemModal';
import QuickOrderForm from '../components/QuickOrderForm';
import { menuItems } from '../data/menuItems';
import { MenuItem, QuickOrderItem } from '../types';

const Menu: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showQuickOrder, setShowQuickOrder] = useState(false);

  const categories = ['appetizers', 'mains', 'desserts', 'beverages'];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = !searchTerm || 
        Object.values(item.name).some(name => 
          name.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        Object.values(item.description).some(desc => 
          desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory && item.available;
    });
  }, [searchTerm, selectedCategory]);

  const handleQuickOrderSubmit = (items: QuickOrderItem[]) => {
    // Convert quick order items to cart items
    items.forEach((quickItem, index) => {
      const mockMenuItem: MenuItem = {
        id: `quick-${Date.now()}-${index}`,
        name: { en: quickItem.itemName, he: quickItem.itemName, ar: quickItem.itemName, ru: quickItem.itemName, yi: quickItem.itemName, am: quickItem.itemName, fr: quickItem.itemName, es: quickItem.itemName, de: quickItem.itemName },
        description: { en: quickItem.specifications, he: quickItem.specifications, ar: quickItem.specifications, ru: quickItem.specifications, yi: quickItem.specifications, am: quickItem.specifications, fr: quickItem.specifications, es: quickItem.specifications, de: quickItem.specifications },
        price: quickItem.estimatedPrice,
        category: 'quick-order',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        available: true
      };

      for (let i = 0; i < quickItem.quantity; i++) {
        addToCart(mockMenuItem);
      }
    });

    setShowQuickOrder(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-orange-500 to-teal-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('appName')}
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl opacity-90"
          >
            {t('tagline')}
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Order Type Toggle */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex justify-center mb-8`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg">
            <div className={`flex space-x-2 rtl:space-x-reverse ${isRTL ? 'flex-row-reverse' : ''}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowQuickOrder(false)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  !showQuickOrder
                    ? 'bg-gradient-to-r from-orange-500 to-teal-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <ShoppingCart size={18} />
                <span>{t('cartOrder')}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowQuickOrder(true)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  showQuickOrder
                    ? 'bg-gradient-to-r from-orange-500 to-teal-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <Zap size={18} />
                <span>{t('quickOrder')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {showQuickOrder ? (
          <QuickOrderForm
            onSubmit={handleQuickOrderSubmit}
            onCancel={() => setShowQuickOrder(false)}
          />
        ) : (
          <>
        {/* Search and Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex flex-col md:flex-row gap-4 mb-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} text-gray-400`} size={20} />
            <input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} text-gray-400`} size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all min-w-[200px]`}
            >
              <option value="">{t('allCategories')}</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {t(`categories.${category}`)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <p className="text-gray-600 dark:text-gray-400">
            {filteredItems.length} items found
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              index={index}
              onCustomize={setSelectedItem}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No items found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
          </>
        )}
      </div>

      {/* Menu Item Modal */}
      {selectedItem && (
        <MenuItemModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Menu;