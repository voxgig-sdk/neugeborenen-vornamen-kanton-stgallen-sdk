-- ProjectName SDK exists test

local sdk = require("neugeborenen-vornamen-kanton-stgallen_sdk")

describe("NeugeborenenVornamenKantonStgallenSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
