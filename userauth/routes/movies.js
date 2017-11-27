var router = require('express').Router();
var controller = require('../controllers/movies')
var Verify = require('../verify')

router.route('/')
.get(controller.get)
.post(Verify.verifyOrdinaryUser, controller.post)


module.exports = router;

