const router = require('express').Router();
const therapistController = require('./controller/therapist');
const authMiddleware = require('./middleware/therapist');

// add the paths for register, login, me, and logout here

// REMOVE-START
router.post('/login', therapistController.login);
// REMOVE-END

module.exports = router;