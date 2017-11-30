var fav = ('../models/favourite');
var controller = require('../controllers/favourite')
var router = require('express').Router();
var Verify = require('../verify')


router.route('/')
.get(Verify.verifyOrdinaryUser, controller.get)
.post(Verify.verifyOrdinaryUser, controller.post)

module.exports = router;