// Typed models for the NeugeborenenVornamenKantonStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Metadata {
  description?: string
  label?: string
  name?: string
  type?: string
}

export interface MetadataListMatch {
  description?: string
  label?: string
  name?: string
  type?: string
}

export interface Record {
  anzahl?: number
  geschlecht?: string
  geschlecht_label?: string
  id?: string
  jahr?: number
  vorname?: string
}

export interface RecordListMatch {
  anzahl?: number
  geschlecht?: string
  geschlecht_label?: string
  id?: string
  jahr?: number
  vorname?: string
}

