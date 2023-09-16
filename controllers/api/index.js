// const router = require('express').Router();

// const userRoutes = require('./user-routes');

// router.use('/users', userRoutes);

// module.exports = router;

const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');
router.use('/comment', commentRoutes);

const addRoutes = require('./addblog-routes.js');
router.use('/blog', addRoutes);

const editblogRoutes = require('./editblog-routes.js');
router.use('/editblog', editblogRoutes);


module.exports = router;