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
	var id = req.decoded._doc._id
  Fav.find({'postedBy':id}, function(err, fav){
  	if(err){
  		console.log("not finding")
  		newFav= new Fav( req.body)
  		newFav.postedBy =id;
  		newFav.save()
  	}
  	fav.dishes= req.body.id
  	res.send("added new fav")

  })

	

	// favourite = new Fav(req.body)
	// favourite.postedBy = id; 
	// favourite.save(function(err, fav){
	// 	if(err){
	// 		console.log(err)
	// 	}
	// 	res.status(200).json({status:"added new favourite"})
	// })

}