# Typed models for the NeugeborenenVornamenKantonStgallen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Metadata:
    description: Optional[str] = None
    label: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None


@dataclass
class MetadataListMatch:
    description: Optional[str] = None
    label: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Record:
    anzahl: Optional[int] = None
    geschlecht: Optional[str] = None
    geschlecht_label: Optional[str] = None
    id: Optional[str] = None
    jahr: Optional[int] = None
    vorname: Optional[str] = None


@dataclass
class RecordListMatch:
    anzahl: Optional[int] = None
    geschlecht: Optional[str] = None
    geschlecht_label: Optional[str] = None
    id: Optional[str] = None
    jahr: Optional[int] = None
    vorname: Optional[str] = None

