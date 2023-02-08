const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/config/db');

describe('Vehicle routes', () => {
  beforeAll(async () => {
    await db;
  });

  afterAll(async () => {
    await db.close();
  });

  describe('POST /v1/vehicles/add', () => {
    const fakeData = {
      license_number: '7566',
      name: 'Rahim',
      phone: '+87878',
      vehicle_type: 'car',
      charge: 500,
      entry_date: '2021-01-18T12:55:54.379+00:00',
      exit_date: '2021-01-18T12:56:54.379+00:00',
      entry_time: '2021-01-18T12:55:54.379+00:00',
      exit_time: '2021-01-18T12:56:54.379+00:00',
      status: 'in',
      address: 'dahaka'
    };

    test('should return 201 if successfully data inserted', async () => {
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
  });

  describe('GET /v1/vehicles', () => {
    test('should return 200 and fetch all vehicles from the database', async () => {
      const res = await request(app).get('/v1/vehicles').send();
      expect(res.statusCode).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
    });
  });

  describe('GET /v1/vehicles/:id', () => {
    test('should fetch a specific data by id', async () => {
      const id = '63d00be156c0911a6323e3de';
      const res = await request(app).get(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toHaveProperty('_id');
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
        address: expect.any(String)
      });
    });

    test('should return empty object if data is not found', async () => {
      const id = '63d00dfbfc9f2f558024ae3f';
      const res = await request(app).get(`/v1/vehicles/${id}`);
      expect(res.body.data).not.toHaveProperty('_id');
      expect(res.body.data).toMatchObject({});
    });
  });

  describe('PATCH /v1/vehicles/update/:id', () => {
    const fakeData = {
      license_number: 'r32432',
      name: 'Rahim',
      phone: '+87878',
      vehicle_type: 'car',
      charge: 500,
      entry_date: '2021-01-18T12:55:54.379+00:00',
      exit_date: '2022-01-18T12:56:54.379+00:00',
      entry_time: '2021-01-18T12:55:54.379+00:00',
      exit_time: '2022-01-18T12:56:54.379+00:00',
      status: 'in',
      address: 'dahaka'
    };

    test('should return 200 if successfully data updated', async () => {
      const id = '63d00be156c0911a6323e3de';
      const res = await request(app)
        .patch(`/v1/vehicles/update/${id}`)
        .send(fakeData);
      expect(res.statusCode).toBe(200);
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

    test('should return 404 if data is not found to update', async () => {
      const id = '63d00dfbfc9f2f558024ae3f';
      const res = await request(app).patch(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(404);
    });
  });

  describe('DELETE /v1/vehicles/:id', () => {
    test('should return 200 if data is deleted', async () => {
      const id = '63d0176227f4c9fd026c6f7d';
      const res = await request(app).delete(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
    });

    test('should return 200 if data is not found to delete', async () => {
      const id = '63d017897e74bb8e88571748';
      const res = await request(app).delete(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).not.toHaveProperty('_id');
      expect(res.body.data).toMatchObject({});
    });
  });
});
