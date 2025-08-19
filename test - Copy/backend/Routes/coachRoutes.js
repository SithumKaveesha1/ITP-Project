const express = require("express");
const { registerCoach, signInCoach } = require("../Controller/coachController");

const router = express.Router();

router.post("/signup", registerCoach);
router.post("/signin", signInCoach);

module.exports = router;
