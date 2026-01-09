const express = require('express');
const router = express.Router();
const { submitAdmission, getAllAdmissions } = require('../controllers/admissionController');

// POST /api/admissions - Submit new admission
router.post('/', submitAdmission);

// GET /api/admissions - Get all admissions (for admin)
router.get('/', getAllAdmissions);

module.exports = router;
