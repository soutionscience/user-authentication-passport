var Movie= require('../models/movies');


exports.get = function(req, res, next){

	Movie.find({})
	.populate('postedBy')
     .exec(function(err, movie){
     	if(err) throw err
     		res.json(movie)
     })
	// .then(function( movies){
	// 	console.log(movies)
	// 	res.json(movies)
	// },  function(err){ next(err)})

}

exports.post = function(req , res,  next){
	var id = req.decoded._doc._id
	var movie = new Movie(req.body)
	 movie.postedBy = id;
	movie.save(function(err, movie){
		if(err){
			console.log(err)
		}
		var id = req.decoded._doc._id
		var title = req.body.title;
		console.log("user id is :"+ id)
		res.send("saved movie with title, " + title)

	})

}