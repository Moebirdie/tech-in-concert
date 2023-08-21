// CRUD operations on blog posts
const routerComment = require('express').Router();
const {Blog, Comment, User}  = require('../../models');


//get all comments
routerComment.get('/comment', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
        include: [{ model: Blog }, {model: User}],
      });
    res.status(200).json(commentData);  
  }
  catch (err) {
    res.status(500).json(err)
  }
});


// Create a new comment
routerComment.post('/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
       comment_text: req.body.comment_text,
       user_id: req.body.user_id,
       blog_id: req.body.blog_id,
      // user_id: req.session.user_id
  });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get one comment by ID
routerComment.get('/comment/:id', async (req, res) => {
  try {
    const oneCommentData = await Comment.findByPk(req.params.id,{
      comment_text: req.body.comment_text,
      user_id: req.body.user_id,
      blog_id: req.body.blog_id,
      // user_id: req.session.user_id
  });
    res.status(200).json(oneCommentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update one Comment by ID - can be done the same with asyn/await.  This is another method that does the same thing.
routerComment.put('/comment/:id', (req, res) => {
  try {
    Comment.update(
      {
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        blog_id: req.body.blog_id,
      // user_id: req.session.user_id
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((updatedComment)=> {
      res.status(200).json(`Comment successfully updated!`);
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete a comment by id
routerComment.delete('/comment/:id', (req, res) => {
  Comment.destroy({
      where: { 
        id:req.params.id,
        }
  })
  .then((deletedComment)=> {
    res.json(deletedComment);
  })
  .catch ((err) => {
    res.status(500).json(err)
  })
});


module.exports = routerComment;