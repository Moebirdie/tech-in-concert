const  User = require('../models/User');

const userData = [
  {
    firstName: 'James',
    lastName: 'Johnson',
    email: 'james@johnson.com',
  },
  {
    firstName: 'Mary',
    lastName: 'Hopkins',
    email: 'mary@hopkins.com',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
