const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const db = require('../../src/config/db');

describe('Vehicle routes', () => {
  beforeAll(async () => {
    await db;
  });

  afterAll(async () => {
    await db.close();
  });

  /* describe('POST /v1/vehicles/add', () => {
    const fakeData = {
      license_number: '998776',
      name: 'Rahim',
      phone: '+87878',
      vehicle_type: 'car',
      charge: 500,
      entry_date: '2023-02-17',
      exit_date: '2023-03-17',
      entry_time: '2023-01-18T12:54:54.379+00:00',
      exit_time: '2023-01-18T12:54:54.379+00:00',
      status: 'in',
      address: 'dahaka'
    };

    test('should return 201 if successfully data insert', async () => {
      const res = await request(app).post('/v1/vehicles/add').send(fakeData);
      expect(res.statusCode).toBe(201);
      expect(res.body.data).toHaveProperty('_id');
      expect(res.body.data).toMatchObject({
        _id: expect.anything(),
        licenseNumber: fakeData.license_number,
        firstName: fakeData.name,
        phone: fakeData.phone,
        vehicleType: fakeData.vehicle_type,
        charge: fakeData.charge,
        entryDate: expect.any(String),
        exitDate: expect.any(String),
        entryTime: expect.any(String),
        exitTime: expect.any(String),
        status: fakeData.status,
        address: fakeData.address
      });
    });
  }); */

  describe('GET /v1/vehicles', () => {
    test('should return 200 and fetch all vehicles from the database', async () => {
      const res = await request(app).get('/v1/vehicles').send();
      expect(res.statusCode).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
    });

    /* test('should fetch a specific data by id', async () => {
      const res = await request(app).get('/v1/vehicles').send();
      expect(res.statusCode).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
    }); */
  });
});
