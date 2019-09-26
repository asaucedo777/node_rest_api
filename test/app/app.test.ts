import supertest from 'supertest';
import app from '../../src/app/app';

describe('GET /', () => {
  it('debe retornar 200 OK', () => {
    return supertest(app).get('/')
      .expect(200);
  });
});

describe('GET /random-url', () => {
  it('debe retornar 404 KO', (done) => {
    supertest(app).get('/reset')
      .expect(404, done);
  });
});

