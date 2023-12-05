const Certificate = require("./Certificate");

describe("Certificate", () => {
  let dbMock;

  beforeEach(() => {
    dbMock = {
      run: jest.fn(),
      all: jest.fn(),
    };
    Certificate.__setDb(dbMock);
  });

  it("should create a new certificate", (done) => {
    const name = "Test Certificate";
    const data = "Test Data";

    Certificate.create(name, data, (err, certificate) => {
      expect(err).toBeNull();
      expect(certificate).toEqual({
        id: expect.any(Number),
        name,
        data,
      });
      done();
    });
  });

  it("should get all certificates", (done) => {
    Certificate.getAll((err, certificates) => {
      expect(err).toBeNull();
      expect(certificates).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            data: expect.any(String),
          }),
        ])
      );
      done();
    });
  });

  it("should delete a certificate", (done) => {
    // First, create a new certificate
    const name = "Test Certificate";
    const data = "Test Data";

    Certificate.create(name, data, (err, newCertificate) => {
      expect(err).toBeNull();

      // Then, delete the newly created certificate
      Certificate.delete(newCertificate.id, (err, changes) => {
        expect(err).toBeNull();
        expect(changes).toBeGreaterThan(0);
        done();
      });
    });
  }, 10000);
});
