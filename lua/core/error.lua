-- NeugeborenenVornamenKantonStgallen SDK error

local NeugeborenenVornamenKantonStgallenError = {}
NeugeborenenVornamenKantonStgallenError.__index = NeugeborenenVornamenKantonStgallenError


function NeugeborenenVornamenKantonStgallenError.new(code, msg, ctx)
  local self = setmetatable({}, NeugeborenenVornamenKantonStgallenError)
  self.is_sdk_error = true
  self.sdk = "NeugeborenenVornamenKantonStgallen"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NeugeborenenVornamenKantonStgallenError:error()
  return self.msg
end


function NeugeborenenVornamenKantonStgallenError:__tostring()
  return self.msg
end


return NeugeborenenVornamenKantonStgallenError
