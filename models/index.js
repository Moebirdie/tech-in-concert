// import models
const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');


User.belongsToMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Blog.hasMany(Comment,{
  foreignKey: 'comment_id',
});
Comment.belongsTo(Blog, {
  foreignKey: 'comment_id',
});

module.exports = {
  Blog,
  User,
  Comment,
};
