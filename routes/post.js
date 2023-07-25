const express = require('express')
const postsController = require('../controllers/posts')
const loginController = require('../controllers/loginController')
const auth = require('../middleware/auth');

const router = express.Router()

const validator = require('../utils/validation')

router.get('/api/getAllData', postsController.getPosts);
router.get('/api/postById',validator.getUserById, postsController.getPostById);
router.get('/api/getUsersByName',validator.getUserByName, postsController.getUserByName);
router.post('/api/addUser',validator.createUser,postsController.createUser);
router.put('/api/updateEmail',validator.updaeEmail,postsController.updateEmail);
router.delete('/api/deleteUser',validator.deleteUser,postsController.deleteUser);

//login
router.post('/api/getOtp',validator.getOtp,loginController.getOtp);
router.post('/api/verifyOtp',validator.verifyOtp, loginController.verifyOtp);

module.exports = router;
