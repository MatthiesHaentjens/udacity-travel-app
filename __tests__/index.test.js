const request = require("supertest");
const app = require("../src/server/index");

// example from https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .expect(200);
});