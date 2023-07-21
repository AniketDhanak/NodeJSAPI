const express = require('express')
const postsController = require('../controllers/posts')
const bodyParser = require('body-parser')
const router = express.Router()
const createError = require('http-errors');
const cors = require('cors');


const {usersValidation, usersNameValidation} = require('../utils/validation.js');

router.get('/getAllData',postsController.getPosts);
router.get('/postById', usersValidation,postsController.getPostById);
router.get('/getUsersByName',usersNameValidation,postsController.getUserByName);
router.post('/addUser',postsController.createUser);

module.exports = router;
