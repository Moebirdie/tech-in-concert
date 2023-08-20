const router = require('express').Router();
const Category = require('../../models/Category');

// get all categories
router.get('/api/category', async (req, res) => {
  try{
    const categories = await Category.findAll()
    res.status(200).json(categories);
  }
  catch {
    res.status(500).json(error);
  }
});