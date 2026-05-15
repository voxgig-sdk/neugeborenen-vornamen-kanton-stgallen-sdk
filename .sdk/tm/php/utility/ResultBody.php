<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK utility: result_body

class NeugeborenenVornamenKantonStgallenResultBody
{
    public static function call(NeugeborenenVornamenKantonStgallenContext $ctx): ?NeugeborenenVornamenKantonStgallenResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
