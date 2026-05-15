# ProjectName SDK exists test

import pytest
from neugeborenenvornamenkantonstgallen_sdk import NeugeborenenVornamenKantonStgallenSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NeugeborenenVornamenKantonStgallenSDK.test(None, None)
        assert testsdk is not None
