const mongoose = require('mongoose');
mongoose.set('debug', true);

const staderSchema = new mongoose.Schema({
	cityname: String,
	population: String,
	country: String,
	information: String,
	img: String,
},
{
	collection: 'städer'
});


module.exports = mongoose.model('staderModel', staderSchema);