// CRUD operations on blog posts
const router = require('express').Router();
const Blog  = require('../../models/Blog');
const Category = require('../../models/Category');


//get all blogs
router.get('/blog', async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);  
  }
  catch (err) {
    res.status(500).json(err)
  }
});


// Create a new blog
router.post('/blog', async (req, res) => {
  try {
    const newBlog = await Blog.create({
       title: req.body.title,
       summaryText: req.body.summaryText,
       bodyText: req.body.bodyText,
       bannerImage: req.body.bannerImage,
       cardImage: req.body.cardImage,
       category_id: req.body.category_id,
      // user_id: req.session.user_id
  });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get one blog by ID
router.get('/blog/:id', async (req, res) => {
  try {
    const newBlog = await Blog.findByPk(req.params.id,{
       title: req.body.title,
       summaryText: req.body.summaryText,
       bodyText: req.body.bodyText,
       bannerImage: req.body.bannerImage,
       cardImage: req.body.cardImage,
       category_id: req.body.category_id,
      // user_id: req.session.user_id
  });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update one blog by ID - can be done the same with asyn/await.  This is another method that does the same thing.
router.put('/blog/:id', (req, res) => {
  try {
    Blog.update(
      {
       title: req.body.title,
       summaryText: req.body.summaryText,
       bodyText: req.body.bodyText,
       bannerImage: req.body.bannerImage,
       cardImage: req.body.cardImage,
       category_id: req.body.category_id,
      // user_id: req.session.user_id
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((updatedBlog)=> {
      res.status(200).json(`Blog successfully updated!`);
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete a blog by id
router.delete('/blog/:id', (req, res) => {
  Blog.destroy({
      where: { 
        id:req.params.id,
        }
  })
  .then((deletedBook)=> {
    res.json(deletedBook);
  })
  .catch ((err) => {
    res.status(500).json(err)
  })
});


module.exports = router;