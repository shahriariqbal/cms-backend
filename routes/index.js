const express = require("express");
const router = express.Router();
const certificateController = require("../controllers/certificateController");

// Create a new certificate
router.post("/certificates", certificateController.createCertificate);

// Get all certificates
/**
 * @swagger
 * /certificates:
 *   get:
 *     summary: Retrieve a list of certificates
 *     responses:
 *       200:
 *         description: A list of certificates.
 */
router.get("/certificates", certificateController.getAllCertificates);

// Delete a certificate
router.delete("/certificates/:id", certificateController.deleteCertificate);

module.exports = router;
