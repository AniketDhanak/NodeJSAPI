const { check } = require('express-validator');

exports.usersValidation = [
    check('id', 'Please Enter Id').not().isEmpty(),
]

exports.usersNameValidation = [
    check('name', 'Please Enter Name').not().isEmpty(),
]