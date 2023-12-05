const express = require("express");
const router = express.Router();
const certificateController = require("../controllers/certificateController");

// Create a new certificate
/**
 * @swagger
 * /certificates:
 *   post:
 *     summary: Create a new certificate
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               data:
 *                 type: string
 *     responses:
 *       200:
 *         description: A new certificate created successfully
 */
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
/**
 * @swagger
 * /certificates/{id}:
 *   delete:
 *     summary: Delete a certificate by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the certificate to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Certificate deleted successfully
 *       404:
 *         description: Certificate not found
 */
router.delete("/certificates/:id", certificateController.deleteCertificate);

module.exports = router;
