

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NeugeborenenVornamenKantonStgallenSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('MetadataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeugeborenenVornamenKantonStgallenSDK.test()
    const ent = testsdk.Metadata()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'metadata.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Field description","type":"`$STRING`","index$":0},{"active":true,"name":"label","req":false,"short":"Field label","type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"short":"Field name","type":"`$STRING`","index$":2},{"active":true,"name":"type","req":false,"short":"Field data type","type":"`$STRING`","index$":3}],"name":"metadata","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987","json":"{\"operationId\":\"getDatasetMetadata\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"attachments\":{\"description\":\"Dataset attachments and related files\",\"type\":\"array\"},\"dataset_id\":{\"description\":\"Dataset identifier\",\"type\":\"string\"},\"dataset_uid\":{\"description\":\"Unique dataset identifier\",\"type\":\"string\"},\"extra_metas\":{\"properties\":{\"explore\":{\"properties\":{\"download_count\":{\"description\":\"Number of dataset downloads\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"fields\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Field description\",\"type\":\"string\"},\"label\":{\"description\":\"Field label\",\"type\":\"string\"},\"name\":{\"description\":\"Field name\",\"type\":\"string\"},\"type\":{\"description\":\"Field data type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"metas\":{\"properties\":{\"data_processed\":{\"description\":\"Timestamp of last data processing\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Dataset description\",\"type\":\"string\"},\"keyword\":{\"description\":\"Dataset keywords\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"metadata_processed\":{\"description\":\"Timestamp of last metadata processing\",\"format\":\"date-time\",\"type\":\"string\"},\"theme\":{\"description\":\"Dataset themes\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Dataset title\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Dataset not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987","segments":[{"lit":"explore"},{"lit":"v2.1"},{"lit":"catalog"},{"lit":"datasets"},{"lit":"vornamen-der-neugeborenen-kanton-stgallen-seit-1987"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"metadata","name__orig":"metadata","Name":"Metadata","name_":"metadata","name-":"metadata","NAME":"METADATA","index$":0}, {"active":true,"entity":"metadata","key$":"BasicMetadataFlow","kind":"basic","name":"BasicMetadataFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"metadata_ref01"}}],"index$":0}]}, 'Metadata')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let metadata_ref01_data = Object.values(setup.data.existing.metadata)[0] as any

    // LIST
    const metadata_ref01_ent = client.Metadata()
    const metadata_ref01_match: any = {}

    const metadata_ref01_list = (await metadata_ref01_ent.list(metadata_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/metadata/MetadataTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NeugeborenenVornamenKantonStgallenSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['metadata01','metadata02','metadata03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_METADATA_ENTID': idmap,
    'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE': 'FALSE',
    'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_METADATA_ENTID']

  const live = 'TRUE' === env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_METADATA_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NeugeborenenVornamenKantonStgallenSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
