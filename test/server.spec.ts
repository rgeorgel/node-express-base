import req from "supertest";
import server from "../src/server";

test("[GET] /", async () => {
  const res = await req(server).get("/");
  expect(res.body).toEqual({
    "message": "Hello World!"
  });
});