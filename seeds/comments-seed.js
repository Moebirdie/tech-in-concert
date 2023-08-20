const Comments = require('../models/Comments');

const commentData = [
  {
    comment_text: 'Some comment text Here',
    blog_id: 1,
    //user_id: 
  },
  {
    comment_text: 'Some comment text Here',
    blog_id: 2,
    //user_id: 
  },
  {
    comment_text: 'Some comment text Here',
    blog_id: 3,
    //user_id: 
  },
  {
    comment_text: 'Some comment text Here',
    blog_id: 4,
    //user_id: 
  },
  {
    comment_text: 'Some comment text Here',
    blog_id: 5,
    //user_id: 
  },
];

const seedComments = () => Comments.bulkCreate(commentData);


module.exports = seedComments;

