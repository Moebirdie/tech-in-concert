const Blog = require('../models/Blog');

const blogData = [
  {
    title: 'Some Title Here',
    summaryText: 'One or two lines of text that summarize what the article is about',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    user_id: 1,
  },
  {
    title: 'One Some Title Here',
    summaryText: 'One or two lines of text that summarize what the article is about',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non interdum sem. Ut ac feugiat velit, sit amet posuere felis.',
    user_id: 1,
  },
  {
    title: 'Two Some Title Here',
    summaryText: 'One or two lines of text that summarize what the article is about',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non interdum sem. Ut ac feugiat velit, sit amet posuere felis.',
    user_id: 2,
  },
  {
    title: 'Three Some Title Here',
    summaryText: 'One or two lines of text that summarize what the article is about',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non interdum sem. Ut ac feugiat velit',
    user_id: 2,
  },
  {
    title: 'Four Some Title Here',
    summaryText: 'One or two lines of text that summarize what the article is about',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non interdum sem. Ut ac feugiat velit, sit amet posuere felis.',
    user_id: 1,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);


module.exports = seedBlogs;
