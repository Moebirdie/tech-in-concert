// const router = require('express').Router();

// const userRoutes = require('./user-routes');

// router.use('/users', userRoutes);

// module.exports = router;

const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');

router.use('/comment', commentRoutes);

module.exports = router;