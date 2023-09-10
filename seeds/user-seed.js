const  User = require('../models/User');

const userData = [
  {
    username: 'JamesJohnson',
    email: 'james@johnson.com',
    password: 'test12345'
  },
  {
    username: 'MaryHopkins',
    email: 'mary@hopkins.com',
    password: 'test12345'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
