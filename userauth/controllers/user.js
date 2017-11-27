var User= require('../models/user')
var fs = require('fs');
var passport = require('passport')
var LocalStrategy= require('passport-local').Strategy
var Verify= require('../verify')

exports.get =function (req, res ,next) {
	res.send('ok we get')
}

exports.register = function(req, res, next){



	User.register(new User({username: req.body.username}), req.body.password, function(err,user){
		if(err){
			return res.status(500).json({err: err})
		}
		passport.authenticate('local')(req, res, function(){
			return res.status(200).json({status: 'Registation Sucessful!'})
		})

	})

	}

	exports.login = function(req, res, next){

		passport.authenticate('local',function(err, user, info){
			if(err){
				return next(err);
			}
			if(!user){
				return res.status(401).json({
					err: info
				})
			}
			req.login(user, function(err){
				if(err){
					err:'could not login user'
				}
			})
			console.log("users in users,: "+ user)
			var token = Verify.getToken(user)
			console.log(token)
			res.status(200).json({status: 'Login successfull', success: true, token: token})
		})(req, res, next)
	
	}

	exports.logout = function(req, res, next){
		req.logout();
		res.status(200).json({status:"Bye!!"})
	}

