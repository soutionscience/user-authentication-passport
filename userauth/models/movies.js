var mongoose= require('mongoose')
var Schema= mongoose.Schema;

var Movies= new Schema({
	title:String,
	desc: String,
	postedBy:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
			}
})

module.exports = mongoose.model('movie', Movies)