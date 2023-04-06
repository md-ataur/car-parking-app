import request from "supertest";
import app from "../app";
const db = require("../config/db");

describe("Vehicle routes", () => {
  beforeAll(async () => {
    await db;
  });

  afterAll(async () => {
    await db.close();
  });

  describe("POST /v1/vehicles/add", () => {
    const fakeData = {
      licenseNumber: "157",
      firstName: "Rahim",
      phone: "+87878",
      vehicleType: "car",
      charge: 500,
      entryDate: "2021-01-18T12:55:54.379+00:00",
      exitDate: "2021-01-18T12:56:54.379+00:00",
      entryTime: "2021-01-18T12:55:54.379+00:00",
      exitTime: "2021-01-18T12:56:54.379+00:00",
      status: "in",
      address: "dahaka",
    };

    test("should return an object if successfully data inserted", async () => {
      const res = await request(app).post("/v1/vehicles/add").send(fakeData);
      expect(res.statusCode).toBe(201);
      expect(res.body.data).toHaveProperty("_id");
      expect(res.body.data).toMatchObject({
        _id: expect.anything(),
        licenseNumber: fakeData.licenseNumber,
        firstName: fakeData.firstName,
        phone: fakeData.phone,
        vehicleType: fakeData.vehicleType,
        charge: fakeData.charge,
        entryDate: expect.any(String),
        exitDate: expect.any(String),
        entryTime: expect.any(String),
        exitTime: expect.any(String),
        status: fakeData.status,
        address: fakeData.address,
      });
    });
  });

  describe("GET /v1/vehicles", () => {
    test("should return an array if data is found", async () => {
      const res = await request(app).get("/v1/vehicles").send();
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.length).toBeGreaterThan(0);
    });
  });

  describe("GET /v1/vehicles/:id", () => {
    test("should return an object if data is found by id", async () => {
      const id = "642e8ce56a2daa34925ec9ce";
      const res = await request(app).get(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toHaveProperty("_id");
      expect(res.body.data).toMatchObject({
        _id: expect.anything(),
        licenseNumber: expect.any(String),
        firstName: expect.any(String),
        phone: expect.any(String),
        vehicleType: expect.any(String),
        charge: expect.any(Number),
        entryDate: expect.any(String),
        exitDate: expect.any(String),
        entryTime: expect.any(String),
        exitTime: expect.any(String),
        status: expect.any(String),
        address: expect.any(String),
      });
    });

    test("should return an empty object if data is not found", async () => {
      const id = "63d00dfbfc9f2f558024ae3f";
      const res = await request(app).get(`/v1/vehicles/${id}`);
      expect(res.body.data).not.toHaveProperty("_id");
      expect(res.body.data).toMatchObject({});
    });
  });

  describe("PATCH /v1/vehicles/update/:id", () => {
    const fakeData = {
      licenseNumber: "798",
      firstName: "Rahim",
      phone: "+87878",
      vehicleType: "car",
      charge: 500,
      entryDate: "2021-01-18T12:55:54.379+00:00",
      exitDate: "2021-01-18T12:56:54.379+00:00",
      entryTime: "2021-01-18T12:55:54.379+00:00",
      exitTime: "2021-01-18T12:56:54.379+00:00",
      status: "in",
      address: "dahaka",
    };

    test("should return an object if successfully data updated", async () => {
      const id = "642e978141ad058b7c97f73f";
      const res = await request(app).patch(`/v1/vehicles/update/${id}`).send(fakeData);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty("_id");
      expect(res.body.data).toMatchObject({
        _id: expect.anything(),
        licenseNumber: fakeData.licenseNumber,
        firstName: fakeData.firstName,
        phone: fakeData.phone,
        vehicleType: fakeData.vehicleType,
        charge: fakeData.charge,
        entryDate: expect.any(String),
        exitDate: expect.any(String),
        entryTime: expect.any(String),
        exitTime: expect.any(String),
        status: fakeData.status,
        address: fakeData.address,
      });
    });

    test("should return 500 if data is not found to update", async () => {
      const id = "63d00dfbfc9f2f558024ae3f";
      const res = await request(app).patch(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(500);
    });
  });

  describe("DELETE /v1/vehicles/:id", () => {
    test("should return 200 if data is deleted", async () => {
      const id = "642e9693a2ba0357aa5877ff";
      const res = await request(app).delete(`/v1/vehicles/${id}`);
      expect(res.body.success).toBe(true);
      expect(res.statusCode).toBe(200);
    });

    test("should return 200 if data is not found to delete", async () => {
      const id = "63d017897e74bb8e88571748";
      const res = await request(app).delete(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).not.toHaveProperty("_id");
      expect(res.body.data).toMatchObject({});
    });
  });
});
