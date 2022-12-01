'use strict';

var express = require('express');
var router = express.Router();
var Sys = require('../../Boot/Sys');

 // Books Routes

 router.post('/createBook',Sys.App.Controllers.BookController.create_book); //create Books
 router.post('/updateBook',Sys.App.Controllers.BookController.update_book); //update Books
 router.post('/deleteBook',Sys.App.Controllers.BookController.delete_book); //delete Books

 // Selers Routes

 router.post('/createSeller',Sys.App.Controllers.SellerController.create_seller); //create Selers
 router.post('/updateSeller',Sys.App.Controllers.SellerController.update_seller); //update Selers
 router.post('/deleteSeller',Sys.App.Controllers.SellerController.delete_seller); //delete Selers
 
 // Customers Routes
 router.post('/createCustomer',Sys.App.Controllers.CustomerController.create_customer); //create customer
 router.post('/updateCustomer',Sys.App.Controllers.CustomerController.update_customer); //update customer
 router.post('/deleteCustomer',Sys.App.Controllers.CustomerController.delete_customer); //delete customer

 // purchase book from seller to customer
 // form fields{ book id , customer id, seller , prices of book}
 router.post('/purchaseBook',Sys.App.Controllers.CustomerController.purchase_book); 

 // get list of books purchased by customer
// pass only customer id
 router.get('/getCustomerDetail',Sys.App.Controllers.CustomerController.getBookList); 

 // get list of books sell by Seller
// pass only seller id
 router.get('/getSellerDetail',Sys.App.Controllers.SellerController.getBookList); 



 module.exports = router


