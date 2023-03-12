const router = require("express").Router();
const therapistController = require("./controller/therapist");
const patientController = require("./controller/patient");
const authMiddleware = require("./middleware/therapist");


router.post("/login", therapistController.login);
router.post("/register", therapistController.create);
router.get("/therapist", therapistController.getAll);

router.get("/patient", patientController.getPatients);
router.post("/patient", patientController.postPatient);

router.get("/patientCouple", patientController.getCouplePatients);
router.get("/patientChild", patientController.getChildPatients);
router.get("/patientIndividual", patientController.getIndividualPatients);

router.get("/acceptedIndividual", patientController.getAcceptedIndividual);
router.get("/acceptedChild", patientController.getAcceptedChild);
router.get("/acceptedCouple", patientController.getAcceptedCouple);

router.get("/patient/:id", patientController.findPatientbyID);

router.post("/acceptedPatient", patientController.postPrescription);

router.delete("/patient/:id", patientController.deletePatient);

module.exports = router;
