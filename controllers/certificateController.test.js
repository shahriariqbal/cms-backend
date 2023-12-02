const certificateController = require("./certificateController");

test("createCertificate creates a certificate", () => {
  // Arrange
  const req = { body: { name: "Test Certificate", data: "Test Data" } };
  const res = { send: jest.fn() };

  // Act
  certificateController.createCertificate(req, res);

  // Assert
  expect(res.send).toHaveBeenCalledWith(
    "A new certificate has been created with id 1"
  );
});
