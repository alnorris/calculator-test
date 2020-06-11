const app = require('./server')
const supertest = require('supertest')
const querystring = require('querystring')
const request = supertest(app)


it('Test for invalid operator', async done => {
  const query = querystring.stringify({
    operator: '@',
    leftOperand: 6,
    rightOperand: 8 
  })
  const response = await request.get(`/calculate?${query}`)

  expect(response.status).toBe(400)
  expect(response.body.error).toBe('INVALID_OPERATOR')
  done()
})


it('test 2*10', async done => {
  const query = querystring.stringify({
    operator: 'x',
    leftOperand: 2,
    rightOperand: 5 
  })
  const response = await request.get(`/calculate?${query}`)

  expect(response.status).toBe(200)
  expect(response.body.result).toBe(10)
  done()
})


it('test for invalid number', async done => {
  const query = querystring.stringify({
    operator: '+',
    leftOperand: 'H',
    rightOperand: 5 
  })
  const response = await request.get(`/calculate?${query}`)

  expect(response.status).toBe(400)
  expect(response.body.error).toBe("OPERAND_NAN")
  done()
})


it('test 3-3', async done => {
  const query = querystring.stringify({
    operator: '-',
    leftOperand: 3,
    rightOperand: 3 
  })
  const response = await request.get(`/calculate?${query}`)

  expect(response.status).toBe(200)
  expect(response.body.result).toBe(0)
  done()
})


it('test 6*6', async done => {
  const query = querystring.stringify({
    operator: 'x',
    leftOperand: 6,
    rightOperand: 6 
  })
  const response = await request.get(`/calculate?${query}`)

  expect(response.status).toBe(200)
  expect(response.body.result).toBe(36)
  done()
})

it('test decimals 6.2/2', async done => {
  const query = querystring.stringify({
    operator: '/',
    leftOperand: 6.2,
    rightOperand: 2
  })
  const response = await request.get(`/calculate?${query}`)

  expect(response.status).toBe(200)
  expect(response.body.result).toBe(3.1)
  done()
})


it('test divide by zero', async done => {
  const query = querystring.stringify({
    operator: '/',
    leftOperand: 8,
    rightOperand: 0
  })
  const response = await request.get(`/calculate?${query}`)

  expect(response.status).toBe(400)
  expect(response.body.error).toBe("DIVIDE_BY_ZERO")
  done()
})


