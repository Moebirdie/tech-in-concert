// // const router = require('express').Router();

// // const apiRoutes = require('./api');
// // const homeRoutes = require('./home-routes.js');

// // router.use('/', homeRoutes);
// // router.use('/api', apiRoutes);

// // module.exports = router;

const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
//const libraryCardRoutes = require('./libraryCardRoutes');

//router.use('/readers', readerRoutes);
router.use('/categories', blogRoutes);

module.exports = router;