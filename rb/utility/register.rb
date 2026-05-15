# NeugeborenenVornamenKantonStgallen SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NeugeborenenVornamenKantonStgallenUtility.registrar = ->(u) {
  u.clean = NeugeborenenVornamenKantonStgallenUtilities::Clean
  u.done = NeugeborenenVornamenKantonStgallenUtilities::Done
  u.make_error = NeugeborenenVornamenKantonStgallenUtilities::MakeError
  u.feature_add = NeugeborenenVornamenKantonStgallenUtilities::FeatureAdd
  u.feature_hook = NeugeborenenVornamenKantonStgallenUtilities::FeatureHook
  u.feature_init = NeugeborenenVornamenKantonStgallenUtilities::FeatureInit
  u.fetcher = NeugeborenenVornamenKantonStgallenUtilities::Fetcher
  u.make_fetch_def = NeugeborenenVornamenKantonStgallenUtilities::MakeFetchDef
  u.make_context = NeugeborenenVornamenKantonStgallenUtilities::MakeContext
  u.make_options = NeugeborenenVornamenKantonStgallenUtilities::MakeOptions
  u.make_request = NeugeborenenVornamenKantonStgallenUtilities::MakeRequest
  u.make_response = NeugeborenenVornamenKantonStgallenUtilities::MakeResponse
  u.make_result = NeugeborenenVornamenKantonStgallenUtilities::MakeResult
  u.make_point = NeugeborenenVornamenKantonStgallenUtilities::MakePoint
  u.make_spec = NeugeborenenVornamenKantonStgallenUtilities::MakeSpec
  u.make_url = NeugeborenenVornamenKantonStgallenUtilities::MakeUrl
  u.param = NeugeborenenVornamenKantonStgallenUtilities::Param
  u.prepare_auth = NeugeborenenVornamenKantonStgallenUtilities::PrepareAuth
  u.prepare_body = NeugeborenenVornamenKantonStgallenUtilities::PrepareBody
  u.prepare_headers = NeugeborenenVornamenKantonStgallenUtilities::PrepareHeaders
  u.prepare_method = NeugeborenenVornamenKantonStgallenUtilities::PrepareMethod
  u.prepare_params = NeugeborenenVornamenKantonStgallenUtilities::PrepareParams
  u.prepare_path = NeugeborenenVornamenKantonStgallenUtilities::PreparePath
  u.prepare_query = NeugeborenenVornamenKantonStgallenUtilities::PrepareQuery
  u.result_basic = NeugeborenenVornamenKantonStgallenUtilities::ResultBasic
  u.result_body = NeugeborenenVornamenKantonStgallenUtilities::ResultBody
  u.result_headers = NeugeborenenVornamenKantonStgallenUtilities::ResultHeaders
  u.transform_request = NeugeborenenVornamenKantonStgallenUtilities::TransformRequest
  u.transform_response = NeugeborenenVornamenKantonStgallenUtilities::TransformResponse
}
