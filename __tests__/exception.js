const request = require('supertest')
const fs = require('fs')
const path = require('path')
const httpServer = require('../src/httpServer.js')

afterEach(() => {
  httpServer.close()
})
describe('exception handling', () => {
  test('exception', async () => {
    const response = await request(httpServer).get('/testError')
    expect(response.status).toEqual(400)
    expect(response.type).toEqual('application/json')
    expect(response.body).toEqual({
      errors: { _error: 'demo exception' },
      expose: true
    })
  })
})
