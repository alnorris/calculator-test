import React from 'react';
import ButtonGrid from '../components/ButtonGrid'
import NumDisplay from '../components/NumDisplay'
import styled from 'styled-components'
import useCalcProcessor from '../modules/useCalcProcessor'

const CalculatorWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 240px;
  flex-direction: column;
`

const App: React.FC = () => {

  const { onKey, numDisplayVal } = useCalcProcessor()

  return (
    <CalculatorWrapper>
      <NumDisplay>{numDisplayVal}</NumDisplay>
      <ButtonGrid onChange={onKey} />
    </CalculatorWrapper>
  )
}

export default App
