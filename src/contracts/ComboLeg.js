import assert from 'assert'
import { DEFAULT_EXCHANGE, ACTION } from '../constants'

export default class {
  constructor({ conId, ratio, action, exchange }) {
    assert(typeof conId === 'number', 'Contract Id must be a number.')
    assert(!ratio || typeof ratio === 'number', 'Ratio must be a number.')
    assert([ACTION.BUY, ACTION.SELL].includes(action), 'Action must either be BUY or SELL.')

    this.conId = conId || undefined
    this.ratio = ratio || 1
    this.action = action || ACTION.BUY
    this.exchange = exchange || DEFAULT_EXCHANGE
  }
}
