const Comment = require('../models/Comment');

const commentData = [
  {
    comment_text: 'Some comment text Here',
    blog_id: 1,
    //user_id: 
  },
  {
    comment_text: 'Some two comment text Here',
    blog_id: 2,
    //user_id: 
  },
  {
    comment_text: 'Some three comment text Here',
    blog_id: 3,
      //user_id: 
  },
  {
    comment_text: 'Some four comment text Here',
    blog_id: 5,
    //user_id: 
  },
  {
    comment_text: 'Some five comment text Here',
    blog_id: 5,
    //user_id: 
  },
];

const seedComments = () => Comment.bulkCreate(commentData);


module.exports = seedComments;

