const request = require('supertest');
const app = require('../../src/app');
const sequelize = require('../../src/config/sequelize.config');

describe('Vehicle routes', () => {
  beforeAll(async () => {
    await sequelize;
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('POST /v1/vehicles/add', () => {
    const fakeData = {
      license_number: '454',
      name: 'Rahim',
      phone: '+87878',
      vehicle_type: 'car',
      charge: 500,
      entry_date: '2023-02-17',
      exit_date: '2023-03-17',
      entry_time: '11:00',
      exit_time: '12:00',
      status: 'in',
      address: 'dahaka'
    };

    test('should return 201 if successfully data inserted', async () => {
      const res = await request(app).post('/v1/vehicles/add').send(fakeData);
      console.log(res.body);
      expect(res.statusCode).toBe(201);
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data).toMatchObject({
        id: expect.anything(),
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
      const id = '2';
      const res = await request(app).get(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data).toMatchObject({
        id: expect.anything(),
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
      const id = '50';
      const res = await request(app).get(`/v1/vehicles/${id}`);
      expect(res.body.data).not.toHaveProperty('id');
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
      entry_date: '2023-02-17',
      exit_date: '2023-03-17',
      entry_time: '11:00',
      exit_time: '12:00',
      status: 'in',
      address: 'dahaka'
    };

    test('should return 200 if successfully data updated', async () => {
      const id = '3';
      const res = await request(app)
        .patch(`/v1/vehicles/update/${id}`)
        .send(fakeData);
      expect(res.body.data).toContain(1);
      expect(res.statusCode).toBe(200);
    });

    test('should return 404 if data is not found to update', async () => {
      const id = '40';
      const res = await request(app).patch(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(404);
    });
  });

  describe('DELETE /v1/vehicles/:id', () => {
    test('should return 200 if data is deleted', async () => {
      const id = '8';
      const res = await request(app).delete(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).toBe(1);
    });

    test('should return 200 if data is not found to delete', async () => {
      const id = '50';
      const res = await request(app).delete(`/v1/vehicles/${id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.data).not.toHaveProperty('id');
      expect(res.body.data).toMatchObject({});
    });
  });
});
