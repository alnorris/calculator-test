const express = require('express')
const app = express()

app.get('/calculate', (req, res) => {
  const { operator } = req.query

  const leftOperand = parseFloat(req.query.leftOperand)
  const rightOperand = parseFloat(req.query.rightOperand)

  if(isNaN(leftOperand) || isNaN(rightOperand)) {
    return res.status(400).json({ error: 'OPERAND_NAN' })
  }

  let result

  switch (operator) {
    case '/':
      if(parseInt(rightOperand) === 0) {
        return res.status(400).json({ error: 'DIVIDE_BY_ZERO' })
      }
      result = leftOperand / rightOperand
      break
    case '+':
      result = leftOperand + rightOperand
      break
    case '-':
      result = leftOperand - rightOperand
      break;
    case 'x':
      result = leftOperand * rightOperand
      break;
    case '=':
      result = rightOperand
      break;
    default:
      return res.status(400).json({ error: 'INVALID_OPERATOR' })
  }

  return res.json({ result })
})

const PORT = 3001 || process.env.PORT

app.listen(PORT, () => {
  console.log(`Calculator server started, Port: ${PORT}`)
})


module.exports = app



