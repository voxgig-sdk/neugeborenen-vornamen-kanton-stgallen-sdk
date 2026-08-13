# NeugeborenenVornamenKantonStgallen SDK utility: make_context

from neugeborenenvornamenkantonstgallen_sdk.core.context import NeugeborenenVornamenKantonStgallenContext


def make_context_util(ctxmap, basectx):
    return NeugeborenenVornamenKantonStgallenContext(ctxmap, basectx)
