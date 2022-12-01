var Sys = require('../../Boot/Sys');

module.exports = {
  create_book: async function (req, res) {
      await Sys.App.Services.bookServices.insertBookData({
        title: req.body.title,
        author : req.body.author,
        summary : req.body.summary
      })
    
      res.status(200).json({
        status: 'inserted book successfully',
        });
   
  }, 
  update_book: async function (req, res) {
    console.log(req.body)
      await Sys.App.Services.bookServices.updateBookData(
        {_id : req.body.id},{
        title: req.body.title,
        author : req.body.author,
        summary : req.body.summary
      });
    
      res.status(200).json({
        status: 'updated book successfully',
        });
   
  },
  delete_book: async function (req, res) {
      await Sys.App.Services.bookServices.deleteBookData(req.body.id);
      res.status(200).json({
        status: 'deleted book successfully',
        });
   
  } 
};
