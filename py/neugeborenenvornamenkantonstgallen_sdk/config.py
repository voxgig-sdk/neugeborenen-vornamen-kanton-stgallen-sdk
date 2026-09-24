# NeugeborenenVornamenKantonStgallen SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "NeugeborenenVornamenKantonStgallen",
            "slug": "neugeborenen-vornamen-kanton-stgallen",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://daten.sg.ch/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "metadata": {},
                "record": {},
            },
        },
        "entity": {
      "metadata": {
        "fields": [
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Field description",
          },
          {
            "name": "label",
            "title": "Label",
            "type": "`$STRING`",
            "short": "Field label",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Field name",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Field data type",
          },
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
                    "lit": "explore",
                  },
                  {
                    "lit": "v2.1",
                  },
                  {
                    "lit": "catalog",
                  },
                  {
                    "lit": "datasets",
                  },
                  {
                    "lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                  },
                ],
                "parts": [
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "record": {
        "fields": [
          {
            "name": "anzahl",
            "title": "Anzahl",
            "type": "`$INTEGER`",
            "short": "Number of occurrences",
          },
          {
            "name": "geschlecht",
            "title": "Geschlecht",
            "type": "`$STRING`",
            "short": "Gender code",
          },
          {
            "name": "geschlecht_label",
            "title": "Geschlecht Label",
            "type": "`$STRING`",
            "short": "Gender label (male/female)",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique record identifier",
          },
          {
            "name": "jahr",
            "title": "Jahr",
            "type": "`$INTEGER`",
            "short": "Year of birth",
          },
          {
            "name": "vorname",
            "title": "Vorname",
            "type": "`$STRING`",
            "short": "First name",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "explore",
                  },
                  {
                    "lit": "v2.1",
                  },
                  {
                    "lit": "catalog",
                  },
                  {
                    "lit": "datasets",
                  },
                  {
                    "lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                  },
                  {
                    "lit": "records",
                  },
                ],
                "parts": [
                  "explore",
                  "v2.1",
                  "catalog",
                  "datasets",
                  "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
                  "records",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "query": [
                    {
                      "name": "group_by",
                      "orig": "group_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "order_by",
                      "orig": "order_by",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "-anzahl",
                    },
                    {
                      "name": "refine_geschlecht",
                      "orig": "refine_geschlecht",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_jahr",
                      "orig": "refine_jahr",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_vorname",
                      "orig": "refine_vorname",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "select",
                      "orig": "select",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "vorname,geschlecht,jahr,anzahl",
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "UTC",
                    },
                    {
                      "name": "where",
                      "orig": "where",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "jahr >= 2000",
                    },
                  ],
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
                    "where",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
