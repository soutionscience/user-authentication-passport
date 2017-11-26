var User= require('../models/user')
var fs = require('fs');

exports.get =function (req, res ,next) {
	res.send('ok we get')
}

exports.post = function(req, res, next){
	
	var user = new User(req.body)
	user.save(function(err, user){
		if(err){
			res.send(err)
			
		} 
			var username= req.body.username
			res.end("added "+ username+" to database")
	})

}