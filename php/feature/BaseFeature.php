<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK base feature

class NeugeborenenVornamenKantonStgallenBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NeugeborenenVornamenKantonStgallenContext $ctx, array $options): void {}
    public function PostConstruct(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PostConstructEntity(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function SetData(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function GetData(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function GetMatch(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function SetMatch(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PrePoint(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PreSpec(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PreRequest(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PreResponse(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PreResult(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PreDone(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
    public function PreUnexpected(NeugeborenenVornamenKantonStgallenContext $ctx): void {}
}
