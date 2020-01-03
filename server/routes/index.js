let express = require('express');
let router = express.Router();

// Controller modules
let UserController = require('../controllers/UserController');
let PageController = require('../controllers/PageController');

// User Routes
router.get('/auth/google', UserController.authenticate);
router.get('/auth/google/callback', UserController.authenticateRedirect, UserController.authenticateCallback);
router.get('/logout', UserController.logout);

//Create a Page Entry
// router.post('/page/complete', PageController.createPage);
router.post('/page/complete', PageController.createPage);

// Default
router.get('/user', UserController.main);

module.exports = router;
