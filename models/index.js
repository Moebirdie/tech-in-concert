// import models
const Blog = require('./Blog');
const Category = require('./Category');
const Tag = require('./Tag');
const BlogTag = require('./BlogTag');
const User = require('./User');
const Comment = require('./Comment');



// Products belongsTo Category
Blog.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Blog, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Blog.belongsToMany(Tag, {
  through: 'blog_tag',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Blog, {
  through: 'blog_tag',
});

User.belongsToMany(Blog, {
  through: 'user_id',
});

Blog.hasMany(Comment,{
  through: 'blog_id',
});
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

module.exports = {
  Blog,
  Category,
  Tag,
  BlogTag,
  User,
  Comment,
};
