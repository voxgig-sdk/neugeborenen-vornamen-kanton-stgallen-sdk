# NeugeborenenVornamenKantonStgallen SDK utility: feature_add
module NeugeborenenVornamenKantonStgallenUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
