package = "voxgig-sdk-neugeborenen-vornamen-kanton-stgallen"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/neugeborenen-vornamen-kanton-stgallen-sdk.git"
}
description = {
  summary = "NeugeborenenVornamenKantonStgallen SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["neugeborenen-vornamen-kanton-stgallen_sdk"] = "neugeborenen-vornamen-kanton-stgallen_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
