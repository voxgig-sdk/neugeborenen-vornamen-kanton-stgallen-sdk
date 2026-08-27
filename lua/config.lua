-- NeugeborenenVornamenKantonStgallen SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "NeugeborenenVornamenKantonStgallen",
      slug = "neugeborenen-vornamen-kanton-stgallen",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://daten.sg.ch/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["metadata"] = {},
        ["record"] = {},
      },
    },
    entity = {
      ["metadata"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Field description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "label",
            ["short"] = "Field label",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Field name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Field data type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "metadata",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                ["parts"] = {
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["record"] = {
        ["fields"] = {
          {
            ["name"] = "anzahl",
            ["short"] = "Number of occurrences",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "geschlecht",
            ["short"] = "Gender code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "geschlecht_label",
            ["short"] = "Gender label (male/female)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique record identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "jahr",
            ["short"] = "Year of birth",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "vorname",
            ["short"] = "First name",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "record",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "group_by",
                      ["orig"] = "group_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "-anzahl",
                      ["kind"] = "query",
                      ["name"] = "order_by",
                      ["orig"] = "order_by",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_geschlecht",
                      ["orig"] = "refine_geschlecht",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_jahr",
                      ["orig"] = "refine_jahr",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_vorname",
                      ["orig"] = "refine_vorname",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "vorname,geschlecht,jahr,anzahl",
                      ["kind"] = "query",
                      ["name"] = "select",
                      ["orig"] = "select",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "UTC",
                      ["kind"] = "query",
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "jahr >= 2000",
                      ["kind"] = "query",
                      ["name"] = "where",
                      ["orig"] = "where",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records",
                ["parts"] = {
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                  "records",
                },
                ["select"] = {
                  ["exist"] = {
                    "group_by",
                    "limit",
                    "offset",
                    "order_by",
                    "refine_geschlecht",
                    "refine_jahr",
                    "refine_vorname",
                    "select",
                    "timezone",
                    "where",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
