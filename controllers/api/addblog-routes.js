// CRUD operations on blog posts
const router = require('express').Router();
const {Blog, Comment, User}  = require('../../models');
const withAuth = require('../../utils/auth');


//get all blogs
router.get('/newblog', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
        include: [
          { 
            model: Comment,
            attributes: ['user_id', 'comment_text', 'blog_id' ],
          },  
        ],
        where: {
          user_id: 2,
        }
      });
    
      const blogs = blogData.map((blog) =>
      blog.get({plain: true})
      );
    res.render('newblog', {
      //blogs,
//      loggedIn:req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
    
  }
});

router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({
       title: req.body.title,
       summaryText: req.body.summaryText,
       bodyText: req.body.bodyText,
       user_id: req.body.user_id,
      // user_id: req.session.user_id
  });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;