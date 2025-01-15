const express = require("express");
const { createRoom, verifyRoom } = require("../controllers/roomController");
const { roomValidationRules } = require("../validators/roomValidator");
const { validateRequest } = require("../middlewares/validationMiddleware");

const router = express.Router();

router.post("/create", roomValidationRules, validateRequest, createRoom);
router.post("/verify", roomValidationRules, validateRequest, verifyRoom);

module.exports = router;
