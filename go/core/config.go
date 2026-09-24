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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Description",
						"type": "`$STRING`",
						"short": "Field description",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"short": "Field label",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Field name",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Field data type",
					},
				},
				"name": "metadata",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
								"segments": []any{
									map[string]any{
										"lit": "explore",
									},
									map[string]any{
										"lit": "v2.1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
									},
								},
								"parts": []any{
									"explore",
									"v2.1",
									"catalog",
									"datasets",
									"vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
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
						"title": "Anzahl",
						"type": "`$INTEGER`",
						"short": "Number of occurrences",
					},
					map[string]any{
						"name": "geschlecht",
						"title": "Geschlecht",
						"type": "`$STRING`",
						"short": "Gender code",
					},
					map[string]any{
						"name": "geschlecht_label",
						"title": "Geschlecht Label",
						"type": "`$STRING`",
						"short": "Gender label (male/female)",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique record identifier",
					},
					map[string]any{
						"name": "jahr",
						"title": "Jahr",
						"type": "`$INTEGER`",
						"short": "Year of birth",
					},
					map[string]any{
						"name": "vorname",
						"title": "Vorname",
						"type": "`$STRING`",
						"short": "First name",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "record",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records",
								"segments": []any{
									map[string]any{
										"lit": "explore",
									},
									map[string]any{
										"lit": "v2.1",
									},
									map[string]any{
										"lit": "catalog",
									},
									map[string]any{
										"lit": "datasets",
									},
									map[string]any{
										"lit": "vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
									},
									map[string]any{
										"lit": "records",
									},
								},
								"parts": []any{
									"explore",
									"v2.1",
									"catalog",
									"datasets",
									"vornamen-der-neugeborenen-kanton-stgallen-seit-1987",
									"records",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "group_by",
											"orig": "group_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "-anzahl",
										},
										map[string]any{
											"name": "refine_geschlecht",
											"orig": "refine_geschlecht",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_jahr",
											"orig": "refine_jahr",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "refine_vorname",
											"orig": "refine_vorname",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "select",
											"orig": "select",
											"type": "`$STRING`",
											"kind": "query",
											"example": "vorname,geschlecht,jahr,anzahl",
										},
										map[string]any{
											"name": "timezone",
											"orig": "timezone",
											"type": "`$STRING`",
											"kind": "query",
											"example": "UTC",
										},
										map[string]any{
											"name": "where",
											"orig": "where",
											"type": "`$STRING`",
											"kind": "query",
											"example": "jahr >= 2000",
										},
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
