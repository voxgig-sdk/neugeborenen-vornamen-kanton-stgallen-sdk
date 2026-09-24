
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'NeugeborenenVornamenKantonStgallen',
        slug: "neugeborenen-vornamen-kanton-stgallen",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://daten.sg.ch/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        metadata: {
        },
  
        record: {
        },
  
    }
  }


  entity = {
    "metadata": {
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Field description"
        },
        {
          "name": "label",
          "title": "Label",
          "type": "`$STRING`",
          "short": "Field label"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Field name"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Field data type"
        }
      ],
      "name": "metadata",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
              "segments": [
                {
                  "lit": "explore"
                },
                {
                  "lit": "v2.1"
                },
                {
                  "lit": "catalog"
                },
                {
                  "lit": "datasets"
                },
                {
                  "lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987"
                }
              ],
              "parts": [
                "explore",
                "v2.1",
                "catalog",
                "datasets",
                "vornamen-der-neugeborenen-kanton-stgallen-seit-1987"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "record": {
      "fields": [
        {
          "name": "anzahl",
          "title": "Anzahl",
          "type": "`$INTEGER`",
          "short": "Number of occurrences"
        },
        {
          "name": "geschlecht",
          "title": "Geschlecht",
          "type": "`$STRING`",
          "short": "Gender code"
        },
        {
          "name": "geschlecht_label",
          "title": "Geschlecht Label",
          "type": "`$STRING`",
          "short": "Gender label (male/female)"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique record identifier"
        },
        {
          "name": "jahr",
          "title": "Jahr",
          "type": "`$INTEGER`",
          "short": "Year of birth"
        },
        {
          "name": "vorname",
          "title": "Vorname",
          "type": "`$STRING`",
          "short": "First name"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "record",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records",
              "segments": [
                {
                  "lit": "explore"
                },
                {
                  "lit": "v2.1"
                },
                {
                  "lit": "catalog"
                },
                {
                  "lit": "datasets"
                },
                {
                  "lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987"
                },
                {
                  "lit": "records"
                }
              ],
              "parts": [
                "explore",
                "v2.1",
                "catalog",
                "datasets",
                "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                "records"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "group_by",
                    "orig": "group_by",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "-anzahl"
                  },
                  {
                    "name": "refine_geschlecht",
                    "orig": "refine_geschlecht",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "refine_jahr",
                    "orig": "refine_jahr",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "refine_vorname",
                    "orig": "refine_vorname",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "select",
                    "orig": "select",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "vorname,geschlecht,jahr,anzahl"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "UTC"
                  },
                  {
                    "name": "where",
                    "orig": "where",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "jahr >= 2000"
                  }
                ]
              },
              "select": {
                "exist": [
                  "group_by",
                  "limit",
                  "offset",
                  "order_by",
                  "refine_geschlecht",
                  "refine_jahr",
                  "refine_vorname",
                  "select",
                  "timezone",
                  "where"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

