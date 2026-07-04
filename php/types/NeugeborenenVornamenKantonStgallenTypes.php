<?php
declare(strict_types=1);

// Typed models for the NeugeborenenVornamenKantonStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Metadata entity data model. */
class Metadata
{
    public ?string $description = null;
    public ?string $label = null;
    public ?string $name = null;
    public ?string $type = null;
}

/** Match filter for Metadata#list (any subset of Metadata fields). */
class MetadataListMatch
{
    public ?string $description = null;
    public ?string $label = null;
    public ?string $name = null;
    public ?string $type = null;
}

/** Record entity data model. */
class Record
{
    public ?int $anzahl = null;
    public ?string $geschlecht = null;
    public ?string $geschlecht_label = null;
    public ?string $id = null;
    public ?int $jahr = null;
    public ?string $vorname = null;
}

/** Match filter for Record#list (any subset of Record fields). */
class RecordListMatch
{
    public ?int $anzahl = null;
    public ?string $geschlecht = null;
    public ?string $geschlecht_label = null;
    public ?string $id = null;
    public ?int $jahr = null;
    public ?string $vorname = null;
}

