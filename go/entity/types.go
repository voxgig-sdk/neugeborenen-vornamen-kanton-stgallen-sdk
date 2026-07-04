// Typed models for the NeugeborenenVornamenKantonStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Metadata is the typed data model for the metadata entity.
type Metadata struct {
	Description *string `json:"description,omitempty"`
	Label *string `json:"label,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// MetadataListMatch mirrors the metadata fields as an all-optional match
// filter (Go analog of Partial<Metadata>).
type MetadataListMatch struct {
	Description *string `json:"description,omitempty"`
	Label *string `json:"label,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Record is the typed data model for the record entity.
type Record struct {
	Anzahl *int `json:"anzahl,omitempty"`
	Geschlecht *string `json:"geschlecht,omitempty"`
	GeschlechtLabel *string `json:"geschlecht_label,omitempty"`
	Id *string `json:"id,omitempty"`
	Jahr *int `json:"jahr,omitempty"`
	Vorname *string `json:"vorname,omitempty"`
}

// RecordListMatch mirrors the record fields as an all-optional match
// filter (Go analog of Partial<Record>).
type RecordListMatch struct {
	Anzahl *int `json:"anzahl,omitempty"`
	Geschlecht *string `json:"geschlecht,omitempty"`
	GeschlechtLabel *string `json:"geschlecht_label,omitempty"`
	Id *string `json:"id,omitempty"`
	Jahr *int `json:"jahr,omitempty"`
	Vorname *string `json:"vorname,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
