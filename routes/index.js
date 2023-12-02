const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');

// Create a new certificate
router.post('/certificates', certificateController.createCertificate);

// Get all certificates
router.get('/certificates', certificateController.getAllCertificates);

// Delete a certificate
router.delete('/certificates/:id', certificateController.deleteCertificate);

module.exports = router;
