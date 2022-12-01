module.exports = {
    connectionType :  'local',
	option : {
		autoIndex: false, // Don't build indexes
	  	// reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	  	// reconnectInterval: 500, // Reconnect every 500ms
	  	// If not connected, return errors immediately rather than waiting for reconnect
	  	// bufferMaxEntries: 0,
	    useNewUrlParser: true,
	    //poolSize: 2,
	},
    local: {
		mode: 'local',
		mongo: {
			host: 'localhost',
			port: 27017,
			user: '',
			password : '',
			database:'Book_store'
		},
		url: 'mongodb://localhost:27017/Book_store'
	}
}