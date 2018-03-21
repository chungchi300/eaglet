const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../src/app.js');
//all using same config and sequelize sinced cached
const sequelize = smartRequire('sequelize');
const orm = smartRequire('orm');

afterEach(() => {
  app.close();
});
beforeEach(() => {
  return sequelize.sync({ force: true });
});
//
describe('index', () => {
  test('should respond success message', async () => {
    const response = await request(app).get('/success');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual({ result: 'success', author: 'jeffchung' });
  });
});
describe('exception handling', () => {
  test('exception', async () => {
    const response = await request(app).get('/testError');
    expect(response.status).toEqual(400);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual({ _error: 'demo exception', expose: true });
  });
});
async function createOtp(username) {
  await request(app)
    .post('/membership/otp')
    .type('form')
    .send({ username: username });
  return await orm.Otp.last();
}
async function register(username, password) {
  let otp = await createOtp(username);
  let previousUser = await orm.User.count();
  await request(app)
    .post('/membership/register')
    .type('form')
    .send({
      email: username,
      phone: '',
      code: otp.code,
      name: 'jeffchung杰夫',
      password: password,
    });
  return await orm.User.last();
}
describe('membership', () => {
  var testingEmail = 'chungchi300@gmail.com';
  var testingPhone = '67348649';
  test('otp success email', async () => {
    let previousOtp = await orm.Otp.count();
    const response = await request(app)
      .post('/membership/otp')
      .type('form')
      .send({ username: testingEmail });
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect((await orm.Otp.count()) - previousOtp).toBe(1);
  });
  test('otp success phone', async () => {
    let previousOtp = await orm.Otp.count();
    const response = await request(app)
      .post('/membership/otp')
      .type('form')
      .send({ username: testingPhone });
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect((await orm.Otp.count()) - previousOtp).toBe(1);
  });

  test('register success using email', async () => {
    let username = testingEmail;
    let otp = await createOtp(username);
    let previousUser = await orm.User.count();
    const response = await request(app)
      .post('/membership/register')
      .type('form')
      .send({
        email: username,
        phone: '',
        code: otp.code,
        name: 'jeffchung杰夫',
        password: '123456',
      });
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    let currentUserNo = await orm.User.count();
    expect(currentUserNo - previousUser).toBe(1);
  });
  test('register success using phone', async () => {
    let username = testingPhone;
    let otp = await createOtp(username);
    let previousUser = await orm.User.count();
    const response = await request(app)
      .post('/membership/register')
      .type('form')
      .send({
        email: '',
        phone: username,
        code: otp.code,
        name: 'jeffchung杰夫',
        password: '123456',
      });
    expect(response.status).toEqual(200);
    let currentUserNo = await orm.User.count();
    expect(currentUserNo - previousUser).toBe(1);
  });

  test('login success', async () => {
    let email = testingEmail;
    let password = '123456';
    let user = await register(email, password);
    const response = await request(app)
      .post('/membership/login')
      .type('form')
      .send({
        username: email,
        password: password,
      });
    expect(response.status).toEqual(200);
    expect(response.body.token.length > 0).toBe(true);
  });
  test('me with token', async () => {
    let email = testingEmail;
    let password = '123456';
    let user = await register(email, password);

    const response = await request(app)
      .get('/membership/me')
      .set('Authorization', 'bearer ' + user.token);

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.email).toEqual(email);
  });
  test('me with invalid token', async () => {
    let email = testingEmail;
    let password = '123456';
    let user = await register(email, password);

    const response = await request(app)
      .get('/membership/me')
      .set('Authorization', 'bearer ' + 'dummy' + user.token);

    expect(response.status).toEqual(400);
    expect(response.type).toEqual('application/json');
  });

  test('reset password success', async () => {
    let email = testingEmail;
    let password = '123456';
    let newPassword = 'abc123456';
    await register(email, password);
    let otp = await createOtp(email);
    const response = await request(app)
      .post('/membership/resetPassword')
      .type('form')
      .send({
        email: email,
        newPassword: newPassword,
        code: otp.code,
      });
    expect(response.status).toEqual(200);
    let user = await orm.User.last();
    expect(user.password).toEqual(newPassword);
  });
});
