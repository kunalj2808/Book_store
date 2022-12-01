var Sys = require('../../Boot/Sys');

module.exports = {
    create_seller: async function (req, res) {
      await Sys.App.Services.sellerServices.insertsellerData({
        name: req.body.name,
        address : req.body.address,
        mobile : req.body.mobile,
        shopName : req.body.shopName
      })
    
      res.status(200).json({
        status: 'inserted seller successfully',
        });
   
  }, 
  getBookList: async function (req, res) {
    var data = await Sys.App.Services.customerServices.getBookList({Sid: req.body.id});
    var books =[];
    for(var num =0;num<data.length;num++){
    var getbook = await Sys.App.Services.customerServices.getBooks({_id: data[num].Bid});
    books[num]  = (getbook[0].title)
    }
    res.send(books)

 },
  update_seller: async function (req, res) {
      await Sys.App.Services.sellerServices.updatesellerData(
        {_id : req.body.id},{
            name: req.body.name,
        address : req.body.address,
        mobile : req.body.mobile,
        shopName : req.body.shopName
      });
    
      res.status(200).json({
        status: 'updated seller successfully',
        });
   
  },
  delete_seller: async function (req, res) {
      await Sys.App.Services.sellerServices.deletesellerData(req.body.id);
      res.status(200).json({
        status: 'deleted seller successfully',
        });
   
  } 
};
