
import { Context } from './Context'


class NeugeborenenVornamenKantonStgallenError extends Error {

  isNeugeborenenVornamenKantonStgallenError = true

  sdk = 'NeugeborenenVornamenKantonStgallen'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NeugeborenenVornamenKantonStgallenError
}

