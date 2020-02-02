import req from "supertest";
import server from "@app/config/server";

describe ('Swagger', () => {
  it ('Call swagger url and receive the response', async (done) => {
    const res = await req(server).get("/swagger/");

    expect(res.status).toBe(200);

    done();
  });
});
