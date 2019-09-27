import supertest from 'supertest';
import app from '../../src/app/app';

describe('GET /random-url', () => {
  it('debe retornar 404 KO', (done) => {
    supertest(app).get('/reset')
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('debe retornar 200 OK', () => {
    return supertest(app).get('/')
      .expect(200);
  });
});

describe('GET /users', () => {
  it('debe retornar 200 OK', () => {
    return supertest(app).get('/users')
      .expect(200);
  });
});

describe('GET /user/:id', () => {
  it('debe retornar 200 OK', () => {
    return supertest(app).get('/users/1')
      .expect(200);
  });
});

describe('GET /user/:id', () => {
  it('debe retornar 404 OK', () => {
    return supertest(app).get('/users/3')
      .expect(404);
  });
});

describe('POST /user/', () => {
  it('debe retornar 201 OK', () => {
    return supertest(app)
      .post('/users/')
      .expect(201);
  });
});

describe('PUT /user/', () => {
  it('debe retornar 200 OK', () => {
    return supertest(app)
      .put('/users/')
      .expect(200);
  });
});

describe('PATCH /user/', () => {
  it('debe retornar 200 OK', () => {
    return supertest(app)
      .patch('/users/')
      .expect(200);
  });
});
