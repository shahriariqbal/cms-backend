const request = require("supertest");
const express = require("express");
const router = require("./index");

const app = express();
app.use(express.json());
app.use(router);

describe("Certificate Routes", () => {
  it("should create a new certificate", async () => {
    const res = await request(app).post("/certificates").send({
      name: "Test Certificate",
      data: "Test Data",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.text).toContain("A new certificate has been created with id"); // Check for the message
  });

  it("should get all certificates", async () => {
    const res = await request(app).get("/certificates");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          data: expect.any(String),
        }),
      ])
    );
  });

  it("should delete a certificate", async () => {
    // First, create a new certificate
    const newCertificate = await request(app).post("/certificates").send({
      name: "Test Certificate",
      data: "Test Data",
    });

    const createdId = newCertificate.text.match(/id (\d+)/)[1];
    // Then, delete the newly created certificate
    const res = await request(app).delete(`/certificates/${createdId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(
      `Certificate with id ${createdId} has been deleted`
    );
  });
});
