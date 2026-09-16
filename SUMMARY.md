# Neugeborenen Vornamen Kanton St.Gallen

Provides dataset of newborn first names in the Canton of St.Gallen since 1987, based on official registry data from the Federal Office for Civil Status. Names with less than five occurrences per year are grouped under &#39;other names&#39; for privacy reasons. The dataset contains first names of newborns in Canton St.Gallen (mother&#39;s place of residence). For multiple registered first names, the first name listed in the official Infostar register of the Federal Office for Civil Status (EAZW) is evaluated. Hyphenated names are counted as a single name (for example Anne-Sophie), similarly spelled names (for example Jannik and Jannick) as two different names. Accents (for example ï or é) are not considered.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 2 entities and 2 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Metadata

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `description`: Field description
- `label`: Field label
- `name`: Field name
- `type`: Field data type

### Record

Results: Successful response.

SDK operations: `list`.

Key fields to recognise:

- `anzahl`: Number of occurrences
- `geschlecht`: Gender code
- `geschlecht_label`: Gender label (male/female)
- `id`: Unique record identifier
- `jahr`: Year of birth

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Metadata | `list` | `GET /explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987` | See reference |
| Record | `list` | `GET /explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records` | See reference |

## Connect to the API

- St.Gallen Open Data API: `https://daten.sg.ch/api`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `neugeborenen-vornamen-kanton-stgallen_list`: List records for an entity. Supported entities: `metadata`, `record`.
- `neugeborenen-vornamen-kanton-stgallen_load`: Load one record for an entity. No active entity supports this operation.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

