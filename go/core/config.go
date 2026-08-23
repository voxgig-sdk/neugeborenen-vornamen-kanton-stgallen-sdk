package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "NeugeborenenVornamenKantonStgallen",
			"slug": "neugeborenen-vornamen-kanton-stgallen",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://daten.sg.ch/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"metadata": map[string]any{},
				"record": map[string]any{},
			},
		},
		"entity": map[string]any{
			"metadata": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Field description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"short": "Field label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Field name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Field data type",
						"type": "`$STRING`",
					},
				},
				"name": "metadata",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
								"parts": []any{
									"explore",
									"v2.1",
									"catalog",
									"datasets",
									"vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"record": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "anzahl",
						"short": "Number of occurrences",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "geschlecht",
						"short": "Gender code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geschlecht_label",
						"short": "Gender label (male/female)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique record identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "jahr",
						"short": "Year of birth",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "vorname",
						"short": "First name",
						"type": "`$STRING`",
					},
				},
				"name": "record",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "group_by",
											"orig": "group_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "-anzahl",
											"kind": "query",
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_geschlecht",
											"orig": "refine_geschlecht",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_jahr",
											"orig": "refine_jahr",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "refine_vorname",
											"orig": "refine_vorname",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "vorname,geschlecht,jahr,anzahl",
											"kind": "query",
											"name": "select",
											"orig": "select",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "UTC",
											"kind": "query",
											"name": "timezone",
											"orig": "timezone",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "jahr >= 2000",
											"kind": "query",
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records",
								"parts": []any{
									"explore",
									"v2.1",
									"catalog",
									"datasets",
									"vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
									"records",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
