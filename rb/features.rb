# NeugeborenenVornamenKantonStgallen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NeugeborenenVornamenKantonStgallenFeatures
  def self.make_feature(name)
    case name
    when "base"
      NeugeborenenVornamenKantonStgallenBaseFeature.new
    when "ratelimit"
      NeugeborenenVornamenKantonStgallenRatelimitFeature.new
    when "retry"
      NeugeborenenVornamenKantonStgallenRetryFeature.new
    when "test"
      NeugeborenenVornamenKantonStgallenTestFeature.new
    when "timeout"
      NeugeborenenVornamenKantonStgallenTimeoutFeature.new
    else
      NeugeborenenVornamenKantonStgallenBaseFeature.new
    end
  end
end
