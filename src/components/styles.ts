import styled from 'styled-components'

export const CalculatorGridWrapper = styled.div`
  display: grid;
  grid-gap: 5px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(5,1fr);
`
