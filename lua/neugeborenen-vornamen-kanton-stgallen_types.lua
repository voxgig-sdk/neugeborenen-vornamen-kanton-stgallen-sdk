-- Typed models for the NeugeborenenVornamenKantonStgallen SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Metadata
---@field description? string
---@field label? string
---@field name? string
---@field type? string

---@class MetadataListMatch
---@field description? string
---@field label? string
---@field name? string
---@field type? string

---@class Record
---@field anzahl? number
---@field geschlecht? string
---@field geschlecht_label? string
---@field id? string
---@field jahr? number
---@field vorname? string

---@class RecordListMatch
---@field group_by? string
---@field limit? number
---@field offset? number
---@field order_by? string
---@field refine_geschlecht? string
---@field refine_jahr? number
---@field refine_vorname? string
---@field select? string
---@field timezone? string
---@field where? string

local M = {}

return M
