const mongoose = require('mongoose');
const books = mongoose.model('books');

module.exports = {
  insertBookData: async function (data) {
    try {
      return await books.create(data);
    } catch (err) {
      console.log('bookServices Error in insertData', err);
      return new Error(err);
    }
  },
  updateBookData: async function (condition,data) {
    try {
       return await books.updateOne(condition,data);
    } catch (err) {
      console.log('bookServices Error in updateData', err);
      return new Error(err);
    }
  },
  deleteBookData: async function (data) {
    try {
      return await books.deleteOne({_id: data});
    } catch (err) {
      console.log('bookServices Error in updateData', err);
      return new Error(err);
    }
  }
};
