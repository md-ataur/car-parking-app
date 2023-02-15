/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const request = require("supertest");
const app = require("../../src/app");

describe("POST /v1/users", () => {
  describe("Given a username and password", () => {
    test("should respond with a json object cotaining the user id", async () => {
      const response = await request(app).post("/v1/todos/users").send({
        username: "Karim",
        password: "password",
      });
      expect(response.body.userId).toBeDefined();
    });

    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/v1/todos/users").send({
        username: "Karim",
        password: "password",
      });
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
  });

  describe("When the username and password is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [{ username: "username" }, { password: "password" }, {}];
      for (const body of bodyData) {
        const response = await request(app).post("/v1/todos/users").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});

describe("GET /v1/todos", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/v1/todos");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
  });

  test("should respond with a json object that cotain data", async () => {
    const response = await request(app).get("/v1/todos");
    expect(response.body.data).toContainEqual({
      id: expect.any(Number),
      name: expect.any(String),
      completed: expect.any(Boolean),
    });
  });
});
