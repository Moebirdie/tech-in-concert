// CRUD operations on blog posts
const router = require('express').Router();
const {Blog, Comment, User}  = require('../../models');


//get all comments
router.get('/comment', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
        include: [
          { model: Blog }, 
          { model: User }
        ],
      });
      const comments = commentData.map((comment) =>
      comment.get({ plain: true })
    );
    res.render('blog', {
      comments,
      loggedIn: req.session.loggedIn
    });
   } catch (err) {
    res.status(400).json(err);
   }
  });



// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
       comment_text: req.body.comment_text,
       user_id: req.body.user_id,
       blog_id: req.body.blog_id,
      // user_id: req.session.user_id  add after we get the session id in place
  });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get one comment by ID
router.get('/comment/:id', async (req, res) => {
  try {
    const oneCommentData = await Comment.findByPk(req.params.id,{
      comment_text: req.body.comment_text,
      //user_id: req.body.user_id,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id
  });
    res.status(200).json(oneCommentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// // update one Comment by ID - can be done the same with asyn/await.  This is another method that does the same thing.
// router.put('/comment/:id', (req, res) => {
//   try {
//     Comment.update(
//       {
//         comment_text: req.body.comment_text,
//         //user_id: req.body.user_id,
//         blog_id: req.body.blog_id,
//         user_id: req.body.user_id
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     )
//     .then((updatedComment)=> {
//       res.status(200).json(`Comment successfully updated!`);
//     })
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
router.put('/comment/:id', async (req, res) => { // Use async function to properly handle asynchronous operations
  try {
    const [updatedRowCount, updatedComments] = await Comment.update( // Wait for the update operation to complete
      {
        comment_text: req.body.comment_text,
        blog_id: req.body.blog_id,
        user_id: req.body.user_id
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (updatedRowCount === 0) {
      // Handle the case when no comment was updated
      res.status(404).json(`Comment with id ${req.params.id} not found.`);
    } else {
      res.status(200).json(`Comment successfully updated!`);
    }
  } catch (err) {
    res.status(500).json(err); // Use 500 for server errors
  }
});



//delete a comment by id
router.delete('/comment/:id', (req, res) => {
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


module.exports = router;