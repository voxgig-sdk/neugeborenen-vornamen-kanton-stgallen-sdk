<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK utility: feature_add

class NeugeborenenVornamenKantonStgallenFeatureAdd
{
    public static function call(NeugeborenenVornamenKantonStgallenContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
