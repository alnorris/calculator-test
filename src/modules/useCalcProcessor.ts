import React from 'react'
import calculateApi from '../api/calculate'

const useCalcProcessor = () => {
  const [numDisplayVal, setNumDisplayVal] = React.useState<string>('0')
  const [value, setValue] = React.useState(null)
  const [waitingForOperand, setWaitingForOperand] = React.useState(false)
  const [currOperator, setCurrOperator] = React.useState(null)

  const inputDigit = (digit) => {
    
    if (waitingForOperand) {
      setWaitingForOperand(false)
      setNumDisplayVal(String(digit))
    } else {
      setNumDisplayVal(numDisplayVal === '0' ? String(digit) : numDisplayVal + digit)
    }
  }


  const clearInput = () => {
    setNumDisplayVal('0')
  }

  const operatorInput = async (operator: string) => {
    const inputValue = parseFloat(numDisplayVal)


    console.log(operator, inputValue)

    if(currOperator === '/' && inputValue === 0) {
      setNumDisplayVal('Not a number')
      setCurrOperator(null)
      setWaitingForOperand(false)
      return
    }

    if (value == null) {
      setValue(inputValue)
    } else if (currOperator) {
      const currentValue = value || 0

      const newValue = await calculateApi({
        operator: currOperator,
        leftOperand: currentValue,
        rightOperand: numDisplayVal
      })

      setValue(newValue)
      setNumDisplayVal(String(newValue))
    }

    setCurrOperator(operator)
    setWaitingForOperand(true)
  }


  const inputPercent = () => {
    const currentValue = parseFloat(numDisplayVal)
    
    if (currentValue === 0) return
    
    const fixedDigits = numDisplayVal.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(numDisplayVal) / 100

    setNumDisplayVal(String(newValue.toFixed(fixedDigits.length + 2)))
  }

  const switchSign = () => {
    const newValue = parseFloat(numDisplayVal) * -1
    setNumDisplayVal(String(newValue))
  }

  const addDot = () => {
    if (!(/\./).test(numDisplayVal)) {
      setNumDisplayVal(numDisplayVal + '.')
      setWaitingForOperand(false)
    }
  }

  const onKey = async (input: string) => {
    switch (input) {
      case 'C':
        clearInput()
        break;
      case '+':
      case '-':
      case '/':
      case 'x':
      case '=':
        operatorInput(input)
        break;
      case '-/+':
        switchSign()
        break;
      case '.':
        addDot()
        break;
      case '%':
        inputPercent()
        break;
      default:
        if((/\d/).test(input)) {
          inputDigit(parseInt(input, 10))
        }
    }
  }

  return {
    onKey,
    numDisplayVal
  }
}

export default useCalcProcessor