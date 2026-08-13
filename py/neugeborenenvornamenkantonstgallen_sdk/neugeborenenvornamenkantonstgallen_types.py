# Typed models for the NeugeborenenVornamenKantonStgallen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Metadata(TypedDict, total=False):
    description: str
    label: str
    name: str
    type: str


class MetadataListMatch(TypedDict, total=False):
    description: str
    label: str
    name: str
    type: str


class Record(TypedDict, total=False):
    anzahl: int
    geschlecht: str
    geschlecht_label: str
    id: str
    jahr: int
    vorname: str


class RecordListMatch(TypedDict, total=False):
    anzahl: int
    geschlecht: str
    geschlecht_label: str
    id: str
    jahr: int
    vorname: str
