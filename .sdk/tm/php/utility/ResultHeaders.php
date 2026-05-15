<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK utility: result_headers

class NeugeborenenVornamenKantonStgallenResultHeaders
{
    public static function call(NeugeborenenVornamenKantonStgallenContext $ctx): ?NeugeborenenVornamenKantonStgallenResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
