var mongoose= require('mongoose')
var Schema= mongoose.Schema;

var commentSchema= new Schema({
	ratings:{
		type:Number,
		min: 0,
		max:5,
		required: true
	},
	comment: String
});

var Movies= new Schema({
	title:String,
	desc: String,
	postedBy:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
			},
    comments:[commentSchema]
})

module.exports = mongoose.model('movie', Movies)