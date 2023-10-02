// // update one blog by ID - can be done the same with asyn/await.  This is another method that does the same thing.
const router = require('express').Router();
const {Blog, Comment, User}  = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/editblog/:id', (req, res) => {
  try {
    Blog.update(
      {
       title: req.body.title,
       summaryText: req.body.summaryText,
       bodyText: req.body.bodyText,
       user_id: req.body.user_id,
      //  comment_id: req.body.comment_id,
       //user_id: req.session.user_id
    });
    res.status(200).json(res);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/editblog/:id', async (req, res) => {
  try {
    const editBlog = await Blog.findByPk(req.params.id,{
       }); 
  const blog = editBlog.get({ plain: true });
  res.render('editdeleteblog', { blog });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});


module.exports = router;