var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bookSchema = new Schema(
	{
	title: {
		type : 'string',
		required: true
	},
    author: {
		type: 'string'
	},
    summary: {
		type: 'string'
	},
    createdAt : { type: Date, default: Date.now() },
	updatedAt : { type: Date, default: Date.now() }
},
	{collection: 'books'}
	);
 mongoose.model('books', bookSchema);
