import req from "supertest";
import server from "@app/config/server";

describe ('Health', () => {
  it ('Call health check url and receive the response', async (done) => {
    const res = await req(server).get("/health");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe(true);

    expect(res.body.data).toEqual({
      api: true,
      database: false,
    });

    done();
  });
});
