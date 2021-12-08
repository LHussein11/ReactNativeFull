const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://liban:@cluster0.khz5l.mongodb.net/umw100?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function (callback) {
	console.log('Mongodb connected!');
});
