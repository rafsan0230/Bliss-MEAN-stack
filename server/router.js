const router = require("express").Router();
const therapistController = require("./controller/therapist");
const patientController = require("./controller/patient");
const acceptedPatientController = require("./controller/acceptedPatient");
const authMiddleware = require("./middleware/therapist");
const PatientTrauma = require("./models/PatientTrauma");


router.post("/login", therapistController.login);
router.post("/register", therapistController.create);
router.get("/therapist", therapistController.getAll);

router.get("/patient", patientController.getPatients);
router.post("/patient", patientController.postPatient);

router.get("/patientCouple", patientController.getCouplePatients);

router.get("/patientChild", patientController.getChildPatients);

router.get("/patientTrauma", patientController.getTraumaPatients);

router.delete("/patientTrauma/:id", patientController.deleteTraumaPatient);
router.delete("/patientChild/:id", patientController.deleteChildPatient);
router.delete("/patientCouple/:id", patientController.deleteCouplePatient);

router.post("/acceptedTrauma", acceptedPatientController.postAcceptedTrauma);
router.put("/acceptedTrauma", acceptedPatientController.postAcceptedTrauma);
router.get("/acceptedTrauma", acceptedPatientController.getAcceptedTrauma);

router.post("/acceptedChild", acceptedPatientController.postAcceptedChild);
router.get("/acceptedChild", acceptedPatientController.getAcceptedChild);

router.post("/acceptedCouple", acceptedPatientController.postAcceptedCouple);
router.get("/acceptedCouple", acceptedPatientController.getAcceptedCouple);


router.get("/patientTrauma/:id", patientController.findTraumaPatientbyID);
router.get("/patientChild/:id", patientController.findChildPatientbyID);
router.get("/patientCouple/:id", patientController.findCouplePatientbyID);

module.exports = router;
