const request = require('supertest');
const { app, server } = require('../index'); // 👈 import both app and server

afterAll((done) => {
  server.close(done); // 👈 close the server to end the test process
});

describe('GET /health', () => {
  it('should return a healthy message', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Chat API is healthy!');
  });
});

describe('GET /', () => {
  it('should return the welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('🚀 Welcome to the Chat API!');
  });
});
