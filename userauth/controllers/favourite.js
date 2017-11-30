var Fav = require('../models/favourites')

exports.get = function(req, res, next){
	Fav.find({})
	// .then(function(err, favourite){
	// 	if(err) throw err
	// 		res.json(favourite)
	// 	res.end()
	// })
	// .populate('postedBy')
	.exec(function(err, fav){
		if(err) throw err
			res.json(fav)
	})
}

exports.post = function(req, res, next){
	var id = req.decoded._doc._id;
	Fav.findOne({ postedBy: id}, function(err, fav){
		if(!fav){

			req.body.postedBy = id;
			fav= new Fav(req.body)
			fav.save(function(err, favourite){
				if(err) throw err;
				res.json(favourite)
			})
			// res.send("fav does not exist put new one")

		}
		else{
			console.log("before push")
			fav.movies.push(req.body.movies)
			console.log("after push")
			fav.save(function(err, favourite){
				console.log("after save")
				if (err) throw err
					res.json(favourite)
			})
		}
	})
     
     

}