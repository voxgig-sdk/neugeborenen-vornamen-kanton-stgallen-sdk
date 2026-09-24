"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RecordEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeugeborenenVornamenKantonStgallenSDK.test();
        const ent = testsdk.Record();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'record.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "anzahl": { "a": true, "h": "Anzahl", "n": "anzahl", "r": false, "sh": "Number of occurrences", "t": "`$INTEGER`", "key$": "anzahl", "index$": 0 }, "geschlecht": { "a": true, "h": "Geschlecht", "n": "geschlecht", "r": false, "sh": "Gender code", "t": "`$STRING`", "key$": "geschlecht", "index$": 1 }, "geschlecht_label": { "a": true, "h": "Geschlecht Label", "n": "geschlecht_label", "r": false, "sh": "Gender label (male/female)", "t": "`$STRING`", "key$": "geschlecht_label", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique record identifier", "t": "`$STRING`", "key$": "id", "index$": 3 }, "jahr": { "a": true, "h": "Jahr", "n": "jahr", "r": false, "sh": "Year of birth", "t": "`$INTEGER`", "key$": "jahr", "index$": 4 }, "vorname": { "a": true, "h": "Vorname", "n": "vorname", "r": false, "sh": "First name", "t": "`$STRING`", "key$": "vorname", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "record", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "group_by", "or": "group_by", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "-anzahl", "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "refine_geschlecht", "or": "refine_geschlecht", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "refine_jahr", "or": "refine_jahr", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "refine_vorname", "or": "refine_vorname", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "vorname,geschlecht,jahr,anzahl", "k": "query", "n": "select", "or": "select", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "UTC", "k": "query", "n": "timezone", "or": "timezone", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": "jahr >= 2000", "k": "query", "n": "where", "or": "where", "r": false, "t": "`$STRING`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records", "q": { "exist": ["group_by", "limit", "offset", "order_by", "refine_geschlecht", "refine_jahr", "refine_vorname", "select", "timezone", "where"] }, "r": {}, "s": [{ "lit": "explore" }, { "lit": "v2.1" }, { "lit": "catalog" }, { "lit": "datasets" }, { "lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987" }, { "lit": "records" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "record", "name__orig": "record", "Name": "Record", "name_": "record", "name-": "record", "NAME": "RECORD", "index$": 1 }, { "active": true, "entity": "record", "key$": "BasicRecordFlow", "kind": "basic", "name": "BasicRecordFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "record_ref01" } }], "index$": 0 }] }, 'Record', { "GET /explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records": { "protocol": "http", "operationId": "getRecords", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "total_count": { "description": "Total number of records matching the query", "key$": "total_count", "type": "integer" }, "results": { "items": { "properties": { "anzahl": { "description": "Number of occurrences", "type": "integer", "key$": "anzahl" }, "geschlecht": { "description": "Gender code", "enum": ["m", "w"], "type": "string", "key$": "geschlecht" }, "geschlecht_label": { "description": "Gender label (male/female)", "type": "string", "key$": "geschlecht_label" }, "id": { "description": "Unique record identifier", "type": "string", "key$": "id" }, "jahr": { "description": "Year of birth", "type": "integer", "key$": "jahr" }, "vorname": { "description": "First name", "type": "string", "key$": "vorname" } }, "type": "object", "index$": 0 }, "key$": "results", "type": "array" } } } } } }, "400": { "description": "Bad request - invalid parameters" }, "404": { "description": "Dataset not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "select", "in": "query", "description": "Fields to include in the response (comma-separated)", "required": false, "schema": { "type": "string" }, "example": "vorname,geschlecht,jahr,anzahl", "index$": 0 }, { "name": "where", "in": "query", "description": "Filter query using ODSQL syntax", "required": false, "schema": { "type": "string" }, "example": "jahr >= 2000", "index$": 1 }, { "name": "limit", "in": "query", "description": "Maximum number of records to return", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 100 }, "index$": 2 }, { "name": "offset", "in": "query", "description": "Number of records to skip for pagination", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "index$": 3 }, { "name": "refine.geschlecht", "in": "query", "description": "Filter by gender", "required": false, "schema": { "type": "string", "enum": ["m", "w"] }, "index$": 4 }, { "name": "refine.vorname", "in": "query", "description": "Filter by first name", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "refine.jahr", "in": "query", "description": "Filter by year", "required": false, "schema": { "type": "integer", "minimum": 1987 }, "index$": 6 }, { "name": "order_by", "in": "query", "description": "Field to sort by (prefix with - for descending order)", "required": false, "schema": { "type": "string" }, "example": "-anzahl", "index$": 7 }, { "name": "group_by", "in": "query", "description": "Fields to group by (comma-separated)", "required": false, "schema": { "type": "string" }, "index$": 8 }, { "name": "timezone", "in": "query", "description": "Timezone for date/time fields", "required": false, "schema": { "type": "string", "default": "UTC" }, "index$": 9 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let record_ref01_data = Object.values(setup.data.existing.record)[0];
        // LIST
        const record_ref01_ent = client.Record();
        const record_ref01_match = {};
        const record_ref01_list = (await record_ref01_ent.list(record_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/record/RecordTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeugeborenenVornamenKantonStgallenSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['record01', 'record02', 'record03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_RECORD_ENTID': idmap,
        'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE': 'FALSE',
        'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_RECORD_ENTID'];
    const live = 'TRUE' === env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_RECORD_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NeugeborenenVornamenKantonStgallenSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RecordEntity.test.js.map