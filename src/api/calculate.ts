import axios from './axios'
import { OperatorType } from '../modules/types'


interface ICalculate {
  operator: OperatorType
  leftOperand: number | string
  rightOperand: number | string
}

export default (params: ICalculate): Promise<number> => (
  axios({
    url: '/calculate',
    method: 'get',
    params,
  }).then(resp => resp.data.result)
)
