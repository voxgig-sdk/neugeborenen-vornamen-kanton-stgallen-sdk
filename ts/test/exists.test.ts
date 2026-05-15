
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NeugeborenenVornamenKantonStgallenSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await NeugeborenenVornamenKantonStgallenSDK.test()
    equal(null !== testsdk, true)
  })

})
