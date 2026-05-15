<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NeugeborenenVornamenKantonStgallenMakeContext
{
    public static function call(array $ctxmap, ?NeugeborenenVornamenKantonStgallenContext $basectx): NeugeborenenVornamenKantonStgallenContext
    {
        return new NeugeborenenVornamenKantonStgallenContext($ctxmap, $basectx);
    }
}
