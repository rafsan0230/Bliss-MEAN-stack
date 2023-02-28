const router = require('express').Router();
const therapistController = require('./controller/therapist');


router.post('/login', therapistController.login)

module.exports = router;