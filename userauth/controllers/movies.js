var Movie= require('../models/movies');


exports.params = function(req, res, next, id){ //take care if anything with params first
 Movie.findById(id)
 .populate('postedBy')

    .then(function(movie) {
      if (!movie) {
        next(new Error('No movie with that id'));
      } else {

        req.movie = movie;
        next();
      }
    }, function(err) {
      next(err);
    });
};





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


exports.getOne = function(req, res, next){
 
 var movie = req.movie;
 		 res.json(movie)



}

exports.postComment = function(req, res,next){
	var movie = req.movie;
	// var id = req.decoded._doc._id
	// req.body.postedBy = id
	movie.comments.push(req.body)
	movie.save(function(err, comment){
		if(err) throw err
			res.status(200).json({status:"added new comment"})
	})

}

exports.getComment= function(){
	res.send("come and get me")
}