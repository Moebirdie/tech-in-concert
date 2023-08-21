const Comment = require('../models/Comment');

const commentData = [
  {
    comment_text: 'Some comment text Here',
    //user_id: 
  },
  {
    comment_text: 'Some two comment text Here',
    //user_id: 
  },
  {
    comment_text: 'Some three comment text Here',
      //user_id: 
  },
  {
    comment_text: 'Some four comment text Here',
    //user_id: 
  },
  {
    comment_text: 'Some five comment text Here',
    //user_id: 
  },
];

const seedComments = () => Comment.bulkCreate(commentData);


module.exports = seedComments;

