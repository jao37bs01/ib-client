import assert from 'assert'
import { SEC_TYPE, RIGHT, DEFAULT_CURRENCY, DEFAULT_EXCHANGE } from '../constants'

export default class {
  constructor({ conId, symbol, strike, expiry, right, multiplier, currency, exchange }) {
    if (!conId) {
      assert(typeof symbol === 'string' && symbol.length > 0, 'Symbol must be a string.')
      assert(typeof strike === 'number', 'Strike must be a number.')
      assert(typeof expiry === 'string' && expiry.length > 0, 'Expiry must be a string.')
      assert([RIGHT.CALL, RIGHT.PUT].includes(right), 'Right must either be CALL or PUT.')
    } else {
      assert(typeof conId === 'number', 'Contract Id must be a number.')
    }

    this.conId = conId || undefined
    this.symbol = symbol || undefined
    this.secType = SEC_TYPE.STOCK_OPTION
    this.strike = strike || undefined
    this.expiry = expiry || undefined
    this.right = right || undefined
    this.multiplier = multiplier || 100
    this.currency = currency || DEFAULT_CURRENCY
    this.exchange = exchange || DEFAULT_EXCHANGE
  }
}
