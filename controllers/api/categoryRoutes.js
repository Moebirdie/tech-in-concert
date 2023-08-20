const routerCategories = require('express').Router();
const Category = require('../../models/Category');

// get all categories
routerCategories.get('/category', async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.status(200).json(categories);
  }
  catch {
    res.status(500).json(error);
  }
});

//get one category
routerCategories.get('/category/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id)
    res.status(200).json(oneCategory);
  }
  catch {
    res.status(500).json(error);
  }
});

//create a new category
routerCategories.post('/category', async (req, res) => {
  try {
    const newCategory = await Category.create(
      {
        category_name: req.body.category_name,
        bannerImage: req.body.bannerImage,
        cardImage: req.body.cardImage,
      }
    )
    res.status(200).json(newCategory);
  }
  catch {
    res.status(500).json(error);
  }
});

//update a category
routerCategories.put('/category/:id', (req, res) => {
  try {
    Category.update(
      {
        category_name: req.body.category_name,
        bannerImage: req.body.bannerImage,
        cardImage: req.body.cardImage,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) => {
        res.status(200).json(`Category successfully updated!`);
      })
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete a category
routerCategories.delete('/category/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy(
      {
        where:
        {
          id: req.params.id,
        }
      }
    )
    res.status(200).json(`Category ${req.params.id} was deleted.`);
  }
  catch {
    res.status(500).json(error);
  }
});


module.exports = routerCategories;