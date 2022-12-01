const mongoose = require('mongoose');
const customers = mongoose.model('customers');
const purchase = mongoose.model('purchases');
const book = mongoose.model('books');

module.exports = {
  insertcustomerData: async function (data) {
    try {
      return await customers.create(data);
    } catch (err) {
      console.log('customerServices Error in insertData', err);
      return new Error(err);
    }
  },
  getBookList: async function (data) {
    try {
       return await purchase.find(data);
    } catch (err) {
      console.log('customerServices Error in purchaseBook', err);
      return new Error(err);
    }
  },
  purchaseBookData: async function (data) {
    try {
       return await purchase.create(data);
    } catch (err) {
      console.log('customerServices Error in purchaseBook', err);
      return new Error(err);
    }
  },
  getBooks: async function (data) {
    try {
       return await book.find(data);
    } catch (err) {
      console.log('customerServices Error in purchaseBook', err);
      return new Error(err);
    }
  },
  updatecustomerData: async function (condition,data) {
    try {
      return await customers.updateOne(condition,data);
    } catch (err) {
      console.log('customerServices Error in updateData', err);
      return new Error(err);
    }
  },
  deletecustomerData: async function (data) {
    try {
      return await customers.deleteOne({_id: data});
    } catch (err) {
      console.log('customerServices Error in updateData', err);
      return new Error(err);
    }
  }
};
