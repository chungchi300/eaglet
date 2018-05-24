const request = require('supertest')
const fs = require('fs')
const path = require('path')
import httpServer from '../src/httpServer'

afterEach(() => {
  httpServer.close()
})

//
describe('index', () => {
  test('should respond success message', async () => {
    const response = await request(httpServer).get('/success')
    expect(response.status).toEqual(200)
    expect(response.type).toEqual('application/json')
    expect(response.body).toEqual({ result: 'success', author: 'jeffchung' })
  })
})
