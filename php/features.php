<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NeugeborenenVornamenKantonStgallenFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NeugeborenenVornamenKantonStgallenBaseFeature();
            case "test":
                return new NeugeborenenVornamenKantonStgallenTestFeature();
            default:
                return new NeugeborenenVornamenKantonStgallenBaseFeature();
        }
    }
}
