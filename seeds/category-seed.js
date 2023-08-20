const Category = require('../models/Category');

const categoryData = [
  {
    category_name: 'Category 1',
  },
  {
    category_name: 'Category 2',
  },
  {
    category_name: 'Category 3',
  },
  {
    category_name: 'Category 4',
  },
  {
    category_name: 'Category 5',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
