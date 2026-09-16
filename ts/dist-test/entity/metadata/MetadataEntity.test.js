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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MetadataEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NeugeborenenVornamenKantonStgallenSDK.test();
        const ent = testsdk.Metadata();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'metadata.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": false, "short": "Field description", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "label", "req": false, "short": "Field label", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "name", "req": false, "short": "Field name", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "type", "req": false, "short": "Field data type", "type": "`$STRING`", "index$": 3 }], "name": "metadata", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987", "json": "{\"operationId\":\"getDatasetMetadata\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"attachments\":{\"description\":\"Dataset attachments and related files\",\"type\":\"array\"},\"dataset_id\":{\"description\":\"Dataset identifier\",\"type\":\"string\"},\"dataset_uid\":{\"description\":\"Unique dataset identifier\",\"type\":\"string\"},\"extra_metas\":{\"properties\":{\"explore\":{\"properties\":{\"download_count\":{\"description\":\"Number of dataset downloads\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"fields\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Field description\",\"type\":\"string\"},\"label\":{\"description\":\"Field label\",\"type\":\"string\"},\"name\":{\"description\":\"Field name\",\"type\":\"string\"},\"type\":{\"description\":\"Field data type\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"metas\":{\"properties\":{\"data_processed\":{\"description\":\"Timestamp of last data processing\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"description\":\"Dataset description\",\"type\":\"string\"},\"keyword\":{\"description\":\"Dataset keywords\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"metadata_processed\":{\"description\":\"Timestamp of last metadata processing\",\"format\":\"date-time\",\"type\":\"string\"},\"theme\":{\"description\":\"Dataset themes\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Dataset title\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Dataset not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987", "segments": [{ "lit": "explore" }, { "lit": "v2.1" }, { "lit": "catalog" }, { "lit": "datasets" }, { "lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "metadata", "name__orig": "metadata", "Name": "Metadata", "name_": "metadata", "name-": "metadata", "NAME": "METADATA", "index$": 0 }, { "active": true, "entity": "metadata", "key$": "BasicMetadataFlow", "kind": "basic", "name": "BasicMetadataFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "metadata_ref01" } }], "index$": 0 }] }, 'Metadata');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let metadata_ref01_data = Object.values(setup.data.existing.metadata)[0];
        // LIST
        const metadata_ref01_ent = client.Metadata();
        const metadata_ref01_match = {};
        const metadata_ref01_list = (await metadata_ref01_ent.list(metadata_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/metadata/MetadataTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NeugeborenenVornamenKantonStgallenSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['metadata01', 'metadata02', 'metadata03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_METADATA_ENTID': idmap,
        'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE': 'FALSE',
        'NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_METADATA_ENTID'];
    const live = 'TRUE' === env.NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NEUGEBORENEN_VORNAMEN_KANTON_STGALLEN_TEST_METADATA_ENTID'];
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
//# sourceMappingURL=MetadataEntity.test.js.map