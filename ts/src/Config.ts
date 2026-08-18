
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'NeugeborenenVornamenKantonStgallen',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "label",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        }
      ],
      "name": "metadata",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
              "parts": [
                "explore",
                "v2.1",
                "catalog",
                "datasets",
                "vornamen-der-neugeborenen-kanton-stgallen-seit-1987"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "geschlecht",
          "type": "`$STRING`"
        },
        {
          "name": "geschlecht_label",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "jahr",
          "type": "`$INTEGER`"
        },
        {
          "name": "vorname",
          "type": "`$STRING`"
        }
      ],
      "name": "record",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "group_by",
                    "orig": "group_by",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "-anzahl",
                    "kind": "query",
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_geschlecht",
                    "orig": "refine_geschlecht",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_jahr",
                    "orig": "refine_jahr",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_vorname",
                    "orig": "refine_vorname",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "vorname,geschlecht,jahr,anzahl",
                    "kind": "query",
                    "name": "select",
                    "orig": "select",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "UTC",
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "jahr >= 2000",
                    "kind": "query",
                    "name": "where",
                    "orig": "where",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records",
              "parts": [
                "explore",
                "v2.1",
                "catalog",
                "datasets",
                "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                "records"
              ],
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
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
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
  config
}

