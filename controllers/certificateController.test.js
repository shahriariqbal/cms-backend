const Certificate = require("../models/certificate");
const certificateController = require("../controllers/certificateController");

describe("Certificate Controller Tests", () => {
  // Test for creating a new certificate
  it("should create a new certificate", (done) => {
    // Mock request object with test data
    const mockReq = {
      body: {
        name: "Test Certificate",
        data: "Test Data",
      },
    };

    // Mock response object with mock functions
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // Mocking the Certificate.create method to simulate successful creation
    Certificate.create = jest
      .fn()
      .mockImplementationOnce((name, data, callback) => {
        callback(null, { id: 1 }); // Simulating successful creation
      });

    // Calling the createCertificate function from the controller with the mock request and response
    certificateController.createCertificate(mockReq, mockRes);

    // Assertions to check if functions were called with correct arguments and status codes
    expect(Certificate.create).toHaveBeenCalledWith(
      "Test Certificate",
      "Test Data",
      expect.any(Function)
    );
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.send).toHaveBeenCalledWith(
      "A new certificate has been created with id 1"
    );
    done();
  });

  // Test for getting all certificates
  it("should get all certificates", (done) => {
    const mockReq = {}; // Mock request object
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // Mocking the Certificate.getAll method to simulate successful retrieval
    Certificate.getAll = jest.fn().mockImplementationOnce((callback) => {
      callback(null, [{ id: 1, name: "Certificate 1", data: "Data 1" }]);
    });

    // Calling the getAllCertificates function from the controller with the mock request and response
    certificateController.getAllCertificates(mockReq, mockRes);

    // Assertions to check if functions were called with correct arguments and response data
    expect(Certificate.getAll).toHaveBeenCalledWith(expect.any(Function));
    expect(mockRes.send).toHaveBeenCalledWith([
      { id: 1, name: "Certificate 1", data: "Data 1" },
    ]);
    done();
  });

  // Test for deleting a certificate
  it("should delete a certificate", (done) => {
    // Mock request object with the ID of the certificate to delete
    const mockReq = {
      params: {
        id: 1,
      },
    };

    // Mock response object with mock functions
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // Mocking the Certificate.delete method to simulate successful deletion
    Certificate.delete = jest.fn().mockImplementationOnce((id, callback) => {
      callback(null, 1);
    });

    // Calling the deleteCertificate function from the controller with the mock request and response
    certificateController.deleteCertificate(mockReq, mockRes);

    // Assertions to check if functions were called with correct arguments and response data
    expect(Certificate.delete).toHaveBeenCalledWith(1, expect.any(Function));
    expect(mockRes.send).toHaveBeenCalledWith(
      "Certificate with id 1 has been deleted"
    );
    done();
  });
});
