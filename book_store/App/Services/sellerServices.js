const mongoose = require('mongoose');
const sellers = mongoose.model('sellers');
const purchase = mongoose.model('purchases');

module.exports = {
  insertsellerData: async function (data) {
    try {
      return await sellers.create(data);
    } catch (err) {
      console.log('sellerServices Error in insertData', err);
      return new Error(err);
    }
  },
  getBookList: async function (data) {
    try {
       return await purchase.find(data);
    } catch (err) {
      console.log('SellerServices Error in Sale Book', err);
      return new Error(err);
    }
  },
  getBooks: async function (data) {
    try {
       return await book.find(data);
    } catch (err) {
      console.log('sellerServices Error Sales Book', err);
      return new Error(err);
    }
  },
  updatesellerData: async function (condition,data) {
    try {
      return await sellers.updateOne(condition,data);
    } catch (err) {
      console.log('sellerServices Error in updateData', err);
      return new Error(err);
    }
  },
  deletesellerData: async function (data) {
    try {
      return await sellers.deleteOne({_id: data});
    } catch (err) {
      console.log('sellerServices Error in updateData', err);
      return new Error(err);
    }
  }
};
