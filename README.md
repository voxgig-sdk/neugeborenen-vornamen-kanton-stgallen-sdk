# NeugeborenenVornamenKantonStgallen SDK

Newborn first-name frequencies in Canton St.Gallen, Switzerland, year-by-year since 1987

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Neugeborenen Vornamen Kanton St.Gallen

This SDK wraps the **Vornamen der Neugeborenen Kanton St.Gallen seit 1987** dataset on [daten.sg.ch](https://daten.sg.ch/), the open data portal of Switzerland's Canton St.Gallen. The portal is built on Opendatasoft, which exposes every dataset through a uniform Explore v2.1 REST API.

The dataset records first names given to newborns whose mothers reside in Canton St.Gallen, drawn from the Federal Statistical Office's BEVNAT (natural population movement) statistics. Only the first registered name is counted; hyphenated names such as Anne-Sophie are treated as a single name; similar spellings are kept separate and accents are ignored.

What you get from the API:

- Per-year frequency of male and female first names in Canton St.Gallen since 1987
- Filtering by year and by gender via the standard Opendatasoft query parameters
- Names appearing fewer than five times in a given year/gender are bucketed as "other names" to protect privacy

Operational notes: the portal supports CORS in browsers, and access is unauthenticated for catalogue browsing and record reads. Refer to the API console on daten.sg.ch for query syntax (`where`, `select`, `group_by`, `order_by`, `limit`, `offset`).

## Try it

**TypeScript**
```bash
npm install neugeborenen-vornamen-kanton-stgallen
```

**Python**
```bash
pip install neugeborenen-vornamen-kanton-stgallen-sdk
```

**PHP**
```bash
composer require voxgig/neugeborenen-vornamen-kanton-stgallen-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/neugeborenen-vornamen-kanton-stgallen-sdk/go
```

**Ruby**
```bash
gem install neugeborenen-vornamen-kanton-stgallen-sdk
```

**Lua**
```bash
luarocks install neugeborenen-vornamen-kanton-stgallen-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { NeugeborenenVornamenKantonStgallenSDK } from 'neugeborenen-vornamen-kanton-stgallen'

const client = new NeugeborenenVornamenKantonStgallenSDK({})

// List all metadatas
const metadatas = await client.Metadata().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o neugeborenen-vornamen-kanton-stgallen-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "neugeborenen-vornamen-kanton-stgallen": {
      "command": "/abs/path/to/neugeborenen-vornamen-kanton-stgallen-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Metadata** | Dataset metadata exposed by the Opendatasoft catalogue, typically under `/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987`. | `/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987` |
| **Record** | Individual newborn-name frequency rows for a given year and gender, retrieved from `/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records`. | `/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from neugeborenenvornamenkantonstgallen_sdk import NeugeborenenVornamenKantonStgallenSDK

client = NeugeborenenVornamenKantonStgallenSDK({})

# List all metadatas
metadatas, err = client.Metadata(None).list(None, None)
```

### PHP

```php
<?php
require_once 'neugeborenenvornamenkantonstgallen_sdk.php';

$client = new NeugeborenenVornamenKantonStgallenSDK([]);

// List all metadatas
[$metadatas, $err] = $client->Metadata(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/neugeborenen-vornamen-kanton-stgallen-sdk/go"

client := sdk.NewNeugeborenenVornamenKantonStgallenSDK(map[string]any{})

// List all metadatas
metadatas, err := client.Metadata(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "NeugeborenenVornamenKantonStgallen_sdk"

client = NeugeborenenVornamenKantonStgallenSDK.new({})

# List all metadatas
metadatas, err = client.Metadata(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("neugeborenen-vornamen-kanton-stgallen_sdk")

local client = sdk.new({})

-- List all metadatas
local metadatas, err = client:Metadata(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = NeugeborenenVornamenKantonStgallenSDK.test()
const result = await client.Metadata().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = NeugeborenenVornamenKantonStgallenSDK.test(None, None)
result, err = client.Metadata(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = NeugeborenenVornamenKantonStgallenSDK::test(null, null);
[$result, $err] = $client->Metadata(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Metadata(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = NeugeborenenVornamenKantonStgallenSDK.test(nil, nil)
result, err = client.Metadata(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Metadata(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Neugeborenen Vornamen Kanton St.Gallen

- Upstream: [https://daten.sg.ch/explore/dataset/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/](https://daten.sg.ch/explore/dataset/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/)
- API docs: [https://daten.sg.ch/api-console/](https://daten.sg.ch/api-console/)

- Published by the [Canton St.Gallen open data portal](https://daten.sg.ch/) (daten.sg.ch).
- Underlying source is the Federal Statistical Office's BEVNAT (natural population movement) statistics.
- Names appearing fewer than five times per gender per year are aggregated as "other names" for privacy.
- Confirm specific reuse terms on the dataset's information page before redistribution.

---

Generated from the Neugeborenen Vornamen Kanton St.Gallen OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
