<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK utility: result_basic

class NeugeborenenVornamenKantonStgallenResultBasic
{
    public static function call(NeugeborenenVornamenKantonStgallenContext $ctx): ?NeugeborenenVornamenKantonStgallenResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response) {
            $result->status = $response->status;
            $result->status_text = $response->status_text;
            if ($result->status >= 400) {
                $msg = "request: {$result->status}: {$result->status_text}";
                if ($result->err) {
                    $prev = ($result->err instanceof NeugeborenenVornamenKantonStgallenError) ? $result->err->msg : (string)$result->err;
                    $result->err = $ctx->make_error('request_status', "{$prev}: {$msg}");
                } else {
                    $result->err = $ctx->make_error('request_status', $msg);
                }
            } elseif ($response->err) {
                $result->err = $response->err;
            }
        }
        return $result;
    }
}
