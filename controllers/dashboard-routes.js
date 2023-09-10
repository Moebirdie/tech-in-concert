// CRUD operations on blog posts
const router = require('express').Router();
const {Blog, Comment, User}  = require('../models');
const withAuth = require('../utils/auth');


//get all blogs
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
        include: [
          { 
            model: Comment,
            attributes: ['user_id', 'comment_text', 'blog_id' ],
          },  
        ],
        where: {
          user_id: 1,
        }
      });
    
      const blogs = blogData.map((blog) =>
      blog.get({plain: true})
      );
    res.render('homepage', {
      blogs,
//      loggedIn:req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
    
  }
});


// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
// router.get('/blog/:id', withAuth, async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         { 
//           model: Comment,
//           attributes: ['user_id', 'comment_text', 'blog_id' ],
//         },  
//       ],
//     });

//     const blog = blogData.get({ plain: true });
//     res.render('blog', { blog, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // GET one painting
// // Use the custom middleware before allowing the user to access the painting
// router.get('/blog/:id', withAuth, async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id, {
//       include: [
//         { 
//           model: Comment,
//           attributes: ['user_id', 'comment_text', 'blog_id' ],
//         },  
//       ],
//     });

//     const blog = blogData.get({ plain: true });

//     res.render('blog', { blog, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




// // Create a new blog
// router.post('/blog', async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//        title: req.body.title,
//        summaryText: req.body.summaryText,
//        bodyText: req.body.bodyText,
//       // user_id: req.body.user_id,
//        comment_id: req.body.comment_id,
//        user_id: req.session.user_id
//   });
//     res.status(200).json(newBlog);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// Get one blog by ID
// router.get('/blog/:id', async (req, res) => {
//   try {
//     const newBlog = await Blog.findByPk(req.params.id,{
//       include: [
//                 { 
//                   model: Comment,
//                   attributes: ['user_id', 'comment_text', 'blog_id' ],
//                 },  
//               ],
//             }); 

//   const blog = newBlog.get({ plain: true });

//   // res.render('blog', { blog, loggedIn: req.session.loggedIn });
//   res.render('blog', { blog });
// } catch (err) {
//   console.log(err);
//   res.status(500).json(err);
// }
// });

// // update one blog by ID - can be done the same with asyn/await.  This is another method that does the same thing.
// router.put('/blog/:id', (req, res) => {
//   try {
//     Blog.update(
//       {
//        title: req.body.title,
//        summaryText: req.body.summaryText,
//        bodyText: req.body.bodyText,
//       // user_id: req.body.user_id,
//        comment_id: req.body.comment_id,
//        user_id: req.session.user_id
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     )
//     .then((updatedBlog)=> {
//       res.status(200).json(`Blog successfully updated!`);
//     })
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //delete a blog by id
// router.delete('/blog/:id', (req, res) => {
//   Blog.destroy({
//       where: { 
//         id:req.params.id,
//         }
//   })
//   .then((deletedBook)=> {
//     res.json(deletedBook);
//   })
//   .catch ((err) => {
//     res.status(500).json(err)
//   })
// });


module.exports = router;