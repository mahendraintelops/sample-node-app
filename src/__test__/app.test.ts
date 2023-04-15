import app from "../app";
import request from "supertest";

// group test using describe
describe("GET /hello", () => {
  it("returns status code 200 if the endpoint is called", async () => {
    const res = await request(app)
      .get("/hello")
      .send();

    // toEqual recursively checks every field of an object or array.
    expect(res.statusCode).toEqual(200);
  });

  it("returns not found if url is different", async () => {
    const res = await request(app).get("/hellow").send();
    expect(res.statusCode).toEqual(404);
  });
});