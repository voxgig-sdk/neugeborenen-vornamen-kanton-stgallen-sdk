

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


describe('RecordEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE=TRUE.
  afterEach(liveDelay('NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NeugeborenenVornamenKantonStgallenSDK.test()
    const ent = testsdk.Record()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'record.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"anzahl","req":false,"short":"Number of occurrences","type":"`$INTEGER`","index$":0},{"active":true,"name":"geschlecht","req":false,"short":"Gender code","type":"`$STRING`","index$":1},{"active":true,"name":"geschlecht_label","req":false,"short":"Gender label (male/female)","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"short":"Unique record identifier","type":"`$STRING`","index$":3},{"active":true,"name":"jahr","req":false,"short":"Year of birth","type":"`$INTEGER`","index$":4},{"active":true,"name":"vorname","req":false,"short":"First name","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"record","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"group_by","orig":"group_by","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"-anzahl","kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"refine_geschlecht","orig":"refine_geschlecht","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"refine_jahr","orig":"refine_jahr","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"kind":"query","name":"refine_vorname","orig":"refine_vorname","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":"vorname,geschlecht,jahr,anzahl","kind":"query","name":"select","orig":"select","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"example":"UTC","kind":"query","name":"timezone","orig":"timezone","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":"jahr >= 2000","kind":"query","name":"where","orig":"where","reqd":false,"type":"`$STRING`","index$":9}]},"contract":{"id":"GET /explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records","json":"{\"operationId\":\"getRecords\",\"parameters\":[{\"description\":\"Fields to include in the response (comma-separated)\",\"example\":\"vorname,geschlecht,jahr,anzahl\",\"in\":\"query\",\"name\":\"select\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter query using ODSQL syntax\",\"example\":\"jahr >= 2000\",\"in\":\"query\",\"name\":\"where\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximum number of records to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of records to skip for pagination\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Filter by gender\",\"in\":\"query\",\"name\":\"refine.geschlecht\",\"required\":false,\"schema\":{\"enum\":[\"m\",\"w\"],\"type\":\"string\"}},{\"description\":\"Filter by first name\",\"in\":\"query\",\"name\":\"refine.vorname\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by year\",\"in\":\"query\",\"name\":\"refine.jahr\",\"required\":false,\"schema\":{\"minimum\":1987,\"type\":\"integer\"}},{\"description\":\"Field to sort by (prefix with - for descending order)\",\"example\":\"-anzahl\",\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Fields to group by (comma-separated)\",\"in\":\"query\",\"name\":\"group_by\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Timezone for date/time fields\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"default\":\"UTC\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"results\":{\"items\":{\"properties\":{\"anzahl\":{\"description\":\"Number of occurrences\",\"type\":\"integer\"},\"geschlecht\":{\"description\":\"Gender code\",\"enum\":[\"m\",\"w\"],\"type\":\"string\"},\"geschlecht_label\":{\"description\":\"Gender label (male/female)\",\"type\":\"string\"},\"id\":{\"description\":\"Unique record identifier\",\"type\":\"string\"},\"jahr\":{\"description\":\"Year of birth\",\"type\":\"integer\"},\"vorname\":{\"description\":\"First name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"description\":\"Total number of records matching the query\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"404\":{\"description\":\"Dataset not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records","segments":[{"lit":"explore"},{"lit":"v2.1"},{"lit":"catalog"},{"lit":"datasets"},{"lit":"vornamen-der-neugeborenen-kanton-stgallen-seit-1987"},{"lit":"records"}],"select":{"exist":["group_by","limit","offset","order_by","refine_geschlecht","refine_jahr","refine_vorname","select","timezone","where"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"record","name__orig":"record","Name":"Record","name_":"record","name-":"record","NAME":"RECORD","index$":1}, {"active":true,"entity":"record","key$":"BasicRecordFlow","kind":"basic","name":"BasicRecordFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"record_ref01"}}],"index$":0}]}, 'Record')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let record_ref01_data = Object.values(setup.data.existing.record)[0] as any

    // LIST
    const record_ref01_ent = client.Record()
    const record_ref01_match: any = {}

    const record_ref01_list = (await record_ref01_ent.list(record_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/record/RecordTestData.json')

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
    ['record01','record02','record03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_RECORD_ENTID': idmap,
    'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE': 'FALSE',
    'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_RECORD_ENTID']

  const live = 'TRUE' === env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_RECORD_ENTID']
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
  
