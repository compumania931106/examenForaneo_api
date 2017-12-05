const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/testforaneo', {
      useMongoClient: true
    });
  
    wagner.factory('db', () => mongoose);
    const User = require('./users.model');
    const Purchase = require('./purchases.model');
  
    const models = {
        User,
        Purchase
    };
  
    _.each(models, (v, k) => {
      wagner.factory(k, () => v);
    });
  }