var express = require('express');
var router = require('express').Router();
var controller = require('../controllers/user')

/* GET users listing. */
router.route('/')
.get(controller.get)
.post(controller.post)

module.exports = router;
