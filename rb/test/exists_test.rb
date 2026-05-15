# NeugeborenenVornamenKantonStgallen SDK exists test

require "minitest/autorun"
require_relative "../NeugeborenenVornamenKantonStgallen_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NeugeborenenVornamenKantonStgallenSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
