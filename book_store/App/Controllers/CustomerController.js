var Sys = require('../../Boot/Sys');

module.exports = {
    create_customer: async function (req, res) {
      await Sys.App.Services.customerServices.insertcustomerData({
        name: req.body.name,
        mobile : req.body.mobile,
        gender : req.body.gender,
        intrest : req.body.intrest
      })
    
      res.status(200).json({
        status: 'inserted customer successfully',
        });
   
  }, 
  purchase_book: async function (req, res) {
      await Sys.App.Services.customerServices.purchaseBookData({
        Cid: req.body.customer_id,
        Bid : req.body.book_id,
        Sid : req.body.seller_id,
        price : req.body.price
      })
    
      res.status(200).json({
        status: 'book purchased successfully',
        });
   
  }, 
  update_customer: async function (req, res) {
      await Sys.App.Services.customerServices.updatecustomerData(
        {_id : req.body.id},{
            name: req.body.name,
            mobile : req.body.mobile,
            gender : req.body.gender,
            intrest : req.body.intrest
      });
    
      res.status(200).json({
        status: 'updated customer successfully',
        });
   
  },
  getBookList: async function (req, res) {
     var data = await Sys.App.Services.customerServices.getBookList({Cid: req.body.id});
     var books =[];
     for(var num =0;num<data.length;num++){
     var getbook = await Sys.App.Services.customerServices.getBooks({_id: data[num].Bid});
       books[num]  = (getbook[0].title)
     }
     res.send(books)
    
  },
  delete_customer: async function (req, res) {
      await Sys.App.Services.customerServices.deletecustomerData(req.body.id);
      res.status(200).json({
        status: 'deleted customer successfully',
        });
   
  } 
};
