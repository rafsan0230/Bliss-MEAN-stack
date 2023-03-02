const router = require('express').Router();
const therapistController = require('./controller/therapist');
const patientController = require('./controller/patient');
const authMiddleware = require('./middleware/therapist');

// add the paths for register, login, me, and logout here

// REMOVE-START
router.post('/login', therapistController.login);
router.post('/register', therapistController.create);
router.get('/therapist', therapistController.getAll);


router.get('/patient', authMiddleware, patientController.getPatients);
router.post('/patient', patientController.postPatient);

// REMOVE-END

module.exports = router;
