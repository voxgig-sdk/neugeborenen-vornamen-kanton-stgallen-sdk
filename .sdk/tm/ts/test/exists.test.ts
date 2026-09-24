
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NeugeborenenVornamenKantonStgallenSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NeugeborenenVornamenKantonStgallenSDK.test()
    equal(testsdk instanceof NeugeborenenVornamenKantonStgallenSDK, true,
      'NeugeborenenVornamenKantonStgallenSDK.test() must return a client synchronously')
  })

})
