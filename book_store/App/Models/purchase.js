var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var purchaseSchema = new Schema(
	{
	Cid: {
		type : 'string',
		required: true
	},
    Bid: {
		type: 'string',
        required: true
	},
    Sid: {
		type: 'string',
        required: true
	},
    price: {
		type: 'number'
	},
    createdAt : { type: Date, default: Date.now() },
	updatedAt : { type: Date, default: Date.now() }
},
	{collection: 'purchases'}
	);
 mongoose.model('purchases', purchaseSchema);
