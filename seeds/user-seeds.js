const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'CannibalClarence',
    email: 'cannibal@gmail.com',
    password: 'password123'
  },
  {
    username: 'Theo',
    email: 'theo@gmail.com',
    password: 'password123'
  },
  {
    username: 'Doex88',
    email: '00Doe@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;