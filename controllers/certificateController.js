const Certificate = require("../models/certificate");

// create a new certificate
exports.createCertificate = (req, res) => {
  let name = req.body.name;
  let data = req.body.data;

  // using the Certificate model
  Certificate.create(name, data, (err, certificate) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res
      .status(201)
      .send(`A new certificate has been created with id ${certificate.id}`);
  });
};

// get all certificates
exports.getAllCertificates = (req, res) => {
  Certificate.getAll((err, certificates) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    // Sort certificates in descending order based on ID
    certificates.sort((a, b) => b.id - a.id);
    res.send(certificates);
  });
};
// delete a certificate by ID
exports.deleteCertificate = (req, res) => {
  let id = req.params.id;

  Certificate.delete(id, (err, changes) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    if (changes === 0) {
      return res.status(404).send("No certificate found with the given id");
    }
    res.send(`Certificate with id ${id} has been deleted`);
  });
};
