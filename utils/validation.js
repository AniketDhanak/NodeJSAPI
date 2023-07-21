const { check } = require('express-validator');

exports.getUserById = [check('id').not().isEmpty()];

exports.getUserByName = [check('name').not().isEmpty()];

exports.createUser = [
    check('name').not().isEmpty(),
    check('email').not().isEmpty().isEmail(),
];

exports.updaeEmail = [
    check('email').not().isEmpty().isEmail(),
    check('id').not().isEmpty(),
];

exports.deleteUser = [
    check('id').not().isEmpty(),
];