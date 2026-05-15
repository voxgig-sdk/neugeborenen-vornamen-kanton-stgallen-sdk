# NeugeborenenVornamenKantonStgallen SDK utility: make_context
require_relative '../core/context'
module NeugeborenenVornamenKantonStgallenUtilities
  MakeContext = ->(ctxmap, basectx) {
    NeugeborenenVornamenKantonStgallenContext.new(ctxmap, basectx)
  }
end
