var router = require('express').Router();
var controller = require('../controllers/movies')
var Verify = require('../verify')

 router.param('id', controller.params);

router.route('/')
.get(controller.get)
.post(Verify.verifyOrdinaryUser, controller.post)


router.route('/:id')
.get(controller.getOne);

router.route('/:id/comments')
.post(controller.postComment)
.get(controller.getComment)


module.exports = router;

