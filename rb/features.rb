# NeugeborenenVornamenKantonStgallen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NeugeborenenVornamenKantonStgallenFeatures
  def self.make_feature(name)
    case name
    when "base"
      NeugeborenenVornamenKantonStgallenBaseFeature.new
    when "test"
      NeugeborenenVornamenKantonStgallenTestFeature.new
    else
      NeugeborenenVornamenKantonStgallenBaseFeature.new
    end
  end
end
