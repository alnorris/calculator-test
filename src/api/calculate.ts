import axios from './axios'

interface ICalculate {
  operator: string
  leftOperand: string
  rightOperand: string
}

export default (params: ICalculate): Promise<number> => (
  axios({
    url: '/calculate',
    method: 'get',
    params,
  }).then(resp => resp.data.result)
)
