const router = require('express').Router();
const {Blog, Comment, User}  = require('../models');
const withAuth = require('../utils/auth');

router.get('/editblog/:id', async (req, res) => {
  try {
    const editBlog = await Blog.findByPk(req.params.id,{
      // include: [
      //           { 
      //             model: Comment,
      //             attributes: ['user_id', 'comment_text', 'blog_id' ],
      //           },  
      //         ],
            }); 

  const blog = editBlog.get({ plain: true });

  // res.render('blog', { blog, loggedIn: req.session.loggedIn });
  res.render('editdeleteblog', { blog });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

module.exports = router;