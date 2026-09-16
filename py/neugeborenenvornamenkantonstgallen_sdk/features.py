# NeugeborenenVornamenKantonStgallen SDK feature factory

from neugeborenenvornamenkantonstgallen_sdk.feature.base_feature import NeugeborenenVornamenKantonStgallenBaseFeature
from neugeborenenvornamenkantonstgallen_sdk.feature.ratelimit_feature import NeugeborenenVornamenKantonStgallenRatelimitFeature
from neugeborenenvornamenkantonstgallen_sdk.feature.retry_feature import NeugeborenenVornamenKantonStgallenRetryFeature
from neugeborenenvornamenkantonstgallen_sdk.feature.test_feature import NeugeborenenVornamenKantonStgallenTestFeature
from neugeborenenvornamenkantonstgallen_sdk.feature.timeout_feature import NeugeborenenVornamenKantonStgallenTimeoutFeature


_FEATURES = {
    "base": lambda: NeugeborenenVornamenKantonStgallenBaseFeature(),
    "ratelimit": lambda: NeugeborenenVornamenKantonStgallenRatelimitFeature(),
    "retry": lambda: NeugeborenenVornamenKantonStgallenRetryFeature(),
    "test": lambda: NeugeborenenVornamenKantonStgallenTestFeature(),
    "timeout": lambda: NeugeborenenVornamenKantonStgallenTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
