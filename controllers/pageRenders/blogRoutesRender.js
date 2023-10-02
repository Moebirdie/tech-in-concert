const express = require('express');
const router = require('express').Router();
const Blog  = require('../../models/Blog');

// //get all blogs
// router.get('/blog', async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//         include: [{ model: Comment }, {model: User}],
//       });
//     res.status(200).json(blogData);  
//   }
//   catch (err) {
//     res.status(500).json(err)
//   }
// });

router.get('/addnewblog', async (req, res) => {
  try {
    const newBlog = await Blog.findByPk(req.params.id,{
      //  title: req.body.title,
      //  summaryText: req.body.summaryText,
      //  bodyText: req.body.bodyText,
      //  //user_id: req.body.user_id,
      //  comment_id: req.body.comment_id,
      //  user_id: req.session.user_id
  });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// module.exports = router;
