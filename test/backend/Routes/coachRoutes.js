const express = require('express');
const coachController = require('../Controller/coachController'); 
const authMiddleware = require('../middleware/auth');


const router = express.Router();

// Public Routes
router.post('/signup', coachController.signup);
router.post('/signin', coachController.signin);

// Protected Routes (Require Authentication)

router.get('/dashboard', coachController.getCoachProfile);
router.put('/dashboard/update', coachController.updateCoachProfile);

module.exports = router;
