<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK utility: prepare_body

class NeugeborenenVornamenKantonStgallenPrepareBody
{
    public static function call(NeugeborenenVornamenKantonStgallenContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
