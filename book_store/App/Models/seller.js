var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var sellerSchema = new Schema(
	{
	name: {
		type : 'string',
		required: true
	},
    address: {
		type: 'string'
	},
    mobile: {
		type: 'number'
	},
    shopName: {
		type: 'string'
	},
    createdAt : { type: Date, default: Date.now() },
	updatedAt : { type: Date, default: Date.now() }
},
	{collection: 'sellers'}
	);
 mongoose.model('sellers', sellerSchema);
