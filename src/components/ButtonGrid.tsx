import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

interface IButtonGrid {
  onChange: (value: string) => void
}

const ZeroSign = styled(Button)`
  grid-row: 5 / 6;
  grid-column: 1 / 3;
  width: 100%;
`

const CalculatorGridWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(5,1fr);
`

const ButtonGrid: React.FC<IButtonGrid> = ({ onChange }) => {

  const keyInput = React.useCallback(
    (event: any) => {
      onChange(event.target.innerHTML)
    }, [onChange])

  return (
    <CalculatorGridWrapper onClick={keyInput}>
      <Button>C</Button>
      <Button>-/+</Button>
      <Button>%</Button>
      <Button isOperator>/</Button>
      <Button>9</Button>
      <Button>8</Button>
      <Button>7</Button>
      <Button isOperator>x</Button>
      <Button>6</Button>
      <Button>5</Button>
      <Button>4</Button>
      <Button isOperator>-</Button>
      <Button>3</Button>
      <Button>2</Button>
      <Button>1</Button>
      <Button isOperator>+</Button>
      <ZeroSign>0</ZeroSign>
      <Button>.</Button>
      <Button isOperator>=</Button>
    </CalculatorGridWrapper>
  )
}

export default ButtonGrid