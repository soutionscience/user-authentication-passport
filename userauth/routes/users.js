var express = require('express');
var router = require('express').Router();
var controller = require('../controllers/user')

/* GET users listing. */
router.route('/')
.get(controller.get)
// .post(controller.post)

router.route('/register')
.post(controller.register)

router.route('/login')
.post(controller.login)

router.route('/logout')
.post(controller.logout)


module.exports = router;
