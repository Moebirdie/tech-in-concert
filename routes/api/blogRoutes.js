// CRUD operations on blog posts
const router = require('express').Router();
const { Blog } = require('../../models');
const { Category } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const categories = await Category.findAll({
      include: [
        {
          model: Category
        },
      ],
    })
    res.status(200).json(categories);
  }
  catch {
    res.status(500).json(err);
  }
});



// //get all blogs
// app.get('/api/blog', async (req, res) => {
//   try {
//     const blogs = await Blog.findAll({
//       include: [
//         {
//           model: Blog
//         },
//       ],
//     });
//     res.status(200).json(blogs);  
//   }
//   catch (err) {
//     res.status(500).json(err)
//   }
// });



// // Create a new blog
// app.post('/api/blog', async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//        title: req.body.title,
//        summaryText: req.body.summaryText,
//        bodyText: req.body.bodyText,
//        bannerImage: req.body.bannerImage,
//        cardImage: req.body.cardImage,
//        category_id: req.body.category_id,
//       // user_id: req.session.user_id
//   });
//     res.status(200).json(newBlog);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });



// // Update a blog



// //move to blogRoutesRender when ready
// //Get all blogs - for home page

// // Get all blogs by user

// // Get blog by id


// //Delete a blog