var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var customerSchema = new Schema(
	{
	name: {
		type : 'string',
		required: true
	},
    mobile: {
		type: 'string'
	},
    gender: {
		type: 'string'
	},
    intrest: {
		type: 'string'
	},
    createdAt : { type: Date, default: Date.now() },
	updatedAt : { type: Date, default: Date.now() }
},
	{collection: 'customers'}
	);
 mongoose.model('customers', customerSchema);
