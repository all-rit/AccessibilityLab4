let express = require('express');
let router = express.Router();

// Controller modules
let UserController = require('../controllers/UserController');

// User Routes
router.get('/auth/google', UserController.authenticate);
router.get('/auth/google/callback', UserController.authenticateRedirect, UserController.authenticateCallback);
router.get('/logout', UserController.logout);

// Default
router.get('/user', UserController.main);

module.exports = router;
