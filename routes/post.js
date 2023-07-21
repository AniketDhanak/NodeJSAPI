const express = require('express')
const postsController = require('../controllers/posts')

const router = express.Router()

const validator = require('../utils/validation')

router.get('/getAllData',postsController.getPosts);
router.get('/postById',validator.getUserById, postsController.getPostById);
router.get('/getUsersByName',validator.getUserByName, postsController.getUserByName);
router.post('/addUser',validator.createUser,postsController.createUser);
router.put('/updateEmail',validator.updaeEmail,postsController.updateEmail);
router.delete('/deleteUser',validator.deleteUser,postsController.deleteUser);

module.exports = router;
