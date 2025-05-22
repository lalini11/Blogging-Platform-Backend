const sequelize = require('../config/db');
const User = require('./User');
const Post = require('./Post');

module.exports = { sequelize, User, Post}