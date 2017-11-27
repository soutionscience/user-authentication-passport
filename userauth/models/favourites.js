var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Favorite = new Schema({
	postedBy:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	dishes:[{
		type:String
	}]
})

module.exports = mongoose.model('favorite', Favorite)
//module.exports = mongoose.model('movie', Movies)