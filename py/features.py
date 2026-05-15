# NeugeborenenVornamenKantonStgallen SDK feature factory

from feature.base_feature import NeugeborenenVornamenKantonStgallenBaseFeature
from feature.test_feature import NeugeborenenVornamenKantonStgallenTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NeugeborenenVornamenKantonStgallenBaseFeature(),
        "test": lambda: NeugeborenenVornamenKantonStgallenTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
