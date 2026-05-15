<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NeugeborenenVornamenKantonStgallenUtility::setRegistrar(function (NeugeborenenVornamenKantonStgallenUtility $u): void {
    $u->clean = [NeugeborenenVornamenKantonStgallenClean::class, 'call'];
    $u->done = [NeugeborenenVornamenKantonStgallenDone::class, 'call'];
    $u->make_error = [NeugeborenenVornamenKantonStgallenMakeError::class, 'call'];
    $u->feature_add = [NeugeborenenVornamenKantonStgallenFeatureAdd::class, 'call'];
    $u->feature_hook = [NeugeborenenVornamenKantonStgallenFeatureHook::class, 'call'];
    $u->feature_init = [NeugeborenenVornamenKantonStgallenFeatureInit::class, 'call'];
    $u->fetcher = [NeugeborenenVornamenKantonStgallenFetcher::class, 'call'];
    $u->make_fetch_def = [NeugeborenenVornamenKantonStgallenMakeFetchDef::class, 'call'];
    $u->make_context = [NeugeborenenVornamenKantonStgallenMakeContext::class, 'call'];
    $u->make_options = [NeugeborenenVornamenKantonStgallenMakeOptions::class, 'call'];
    $u->make_request = [NeugeborenenVornamenKantonStgallenMakeRequest::class, 'call'];
    $u->make_response = [NeugeborenenVornamenKantonStgallenMakeResponse::class, 'call'];
    $u->make_result = [NeugeborenenVornamenKantonStgallenMakeResult::class, 'call'];
    $u->make_point = [NeugeborenenVornamenKantonStgallenMakePoint::class, 'call'];
    $u->make_spec = [NeugeborenenVornamenKantonStgallenMakeSpec::class, 'call'];
    $u->make_url = [NeugeborenenVornamenKantonStgallenMakeUrl::class, 'call'];
    $u->param = [NeugeborenenVornamenKantonStgallenParam::class, 'call'];
    $u->prepare_auth = [NeugeborenenVornamenKantonStgallenPrepareAuth::class, 'call'];
    $u->prepare_body = [NeugeborenenVornamenKantonStgallenPrepareBody::class, 'call'];
    $u->prepare_headers = [NeugeborenenVornamenKantonStgallenPrepareHeaders::class, 'call'];
    $u->prepare_method = [NeugeborenenVornamenKantonStgallenPrepareMethod::class, 'call'];
    $u->prepare_params = [NeugeborenenVornamenKantonStgallenPrepareParams::class, 'call'];
    $u->prepare_path = [NeugeborenenVornamenKantonStgallenPreparePath::class, 'call'];
    $u->prepare_query = [NeugeborenenVornamenKantonStgallenPrepareQuery::class, 'call'];
    $u->result_basic = [NeugeborenenVornamenKantonStgallenResultBasic::class, 'call'];
    $u->result_body = [NeugeborenenVornamenKantonStgallenResultBody::class, 'call'];
    $u->result_headers = [NeugeborenenVornamenKantonStgallenResultHeaders::class, 'call'];
    $u->transform_request = [NeugeborenenVornamenKantonStgallenTransformRequest::class, 'call'];
    $u->transform_response = [NeugeborenenVornamenKantonStgallenTransformResponse::class, 'call'];
});
