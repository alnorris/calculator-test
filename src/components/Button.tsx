import styled from 'styled-components'

interface IButtonProps {
  isOperator: boolean
}

const Button = styled.button<IButtonProps>`
  background-color: ${p => p.isOperator ? '#F2A93C' : '#C0C0C0'};
  appearance: none;
  width: 100%;
  height: 60px;
  border: 3px solid #C2C2C2;
  color: #000;
  display: inline-block;
  font-size: 1.1em;
  padding: 0;
  margin: 0;
`

export default Button


