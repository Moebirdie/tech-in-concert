// const path = require('path');
// const express = require('express');
// // const session = require('express-session');
// const exphbs = require('express-handlebars');
// //const routes = require('./contollers');
// // const helpers = require('./utils/helpers');

// const sequelize = require('./config/connection');
// // const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Set up Handlebars.js engine with custom helpers
// //const hbs = exphbs.create({ helpers });

// // const sess = {
// //   secret: 'Super secret secret',
// //   cookie: {
// //     maxAge: 300000,
// //     httpOnly: true,
// //     secure: false,
// //     sameSite: 'strict',
// //   },
// //   resave: false,
// //   saveUninitialized: true,
// //   store: new SequelizeStore({
// //     db: sequelize
// //   })
// // };

// //app.use(session(sess));

// // Inform Express.js on which template engine to use
// // app.engine('handlebars', hbs.engine);
// // app.set('view engine', 'handlebars');

// // app.use(express);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// //app.use(routes);


// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

const express = require('express');
const router = require('./controllers/api/blogRoutes');
const routerUsers = require('./controllers/api/userRoutes');
const routerComment = require('./controllers/api/commentRoutes');
const sequelize = require('./config/connection');
const blogRoutes = require('./controllers/api/blogRoutes.js');
const userRoutes = require('./controllers/api/userRoutes')
const commentRoutes = require('./controllers/api/commentRoutes');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/controllers', blogRoutes);
app.use('/controllers', commentRoutes);
app.use('/controllers', userRoutes);
//app.use('/controllers/api');
// turn on routes
app.use(router);
app.use(routerComment);
app.use(routerUsers);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
