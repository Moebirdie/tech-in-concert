//This will allow us to attach many tags to a blog and a category.  This works like a joining model.
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BlogTag extends Model { }

BlogTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_tag',
  }
);

module.exports = BlogTag;