# frozen_string_literal: true

# Typed models for the NeugeborenenVornamenKantonStgallen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Metadata entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Metadata = Struct.new(
  :description,
  :label,
  :name,
  :type,
  keyword_init: true
)

# Match filter for Metadata#list (any subset of Metadata fields).
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
MetadataListMatch = Struct.new(
  :description,
  :label,
  :name,
  :type,
  keyword_init: true
)

# Record entity data model.
#
# @!attribute [rw] anzahl
#   @return [Integer, nil]
#
# @!attribute [rw] geschlecht
#   @return [String, nil]
#
# @!attribute [rw] geschlecht_label
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jahr
#   @return [Integer, nil]
#
# @!attribute [rw] vorname
#   @return [String, nil]
Record = Struct.new(
  :anzahl,
  :geschlecht,
  :geschlecht_label,
  :id,
  :jahr,
  :vorname,
  keyword_init: true
)

# Match filter for Record#list (any subset of Record fields).
#
# @!attribute [rw] anzahl
#   @return [Integer, nil]
#
# @!attribute [rw] geschlecht
#   @return [String, nil]
#
# @!attribute [rw] geschlecht_label
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jahr
#   @return [Integer, nil]
#
# @!attribute [rw] vorname
#   @return [String, nil]
RecordListMatch = Struct.new(
  :anzahl,
  :geschlecht,
  :geschlecht_label,
  :id,
  :jahr,
  :vorname,
  keyword_init: true
)

