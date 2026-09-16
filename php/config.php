<?php
declare(strict_types=1);

// NeugeborenenVornamenKantonStgallen SDK configuration

class NeugeborenenVornamenKantonStgallenConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "NeugeborenenVornamenKantonStgallen",
                "slug" => "neugeborenen-vornamen-kanton-stgallen",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://daten.sg.ch/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "metadata" => [],
                    "record" => [],
                ],
            ],
            "entity" => [
        'metadata' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Field description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'label',
              'short' => 'Field label',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Field name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Field data type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'metadata',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987',
                  'segments' => [
                    [
                      'lit' => 'explore',
                    ],
                    [
                      'lit' => 'v2.1',
                    ],
                    [
                      'lit' => 'catalog',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'lit' => 'vornamen-der-neugeborenen-kanton-stgallen-seit-1987',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'explore',
                    'v2.1',
                    'catalog',
                    'datasets',
                    'vornamen-der-neugeborenen-kanton-stgallen-seit-1987',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'record' => [
          'fields' => [
            [
              'name' => 'anzahl',
              'short' => 'Number of occurrences',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'geschlecht',
              'short' => 'Gender code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geschlecht_label',
              'short' => 'Gender label (male/female)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique record identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'jahr',
              'short' => 'Year of birth',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'vorname',
              'short' => 'First name',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'record',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'group_by',
                        'orig' => 'group_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => '-anzahl',
                        'kind' => 'query',
                        'name' => 'order_by',
                        'orig' => 'order_by',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_geschlecht',
                        'orig' => 'refine_geschlecht',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_jahr',
                        'orig' => 'refine_jahr',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'refine_vorname',
                        'orig' => 'refine_vorname',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'vorname,geschlecht,jahr,anzahl',
                        'kind' => 'query',
                        'name' => 'select',
                        'orig' => 'select',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'UTC',
                        'kind' => 'query',
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'jahr >= 2000',
                        'kind' => 'query',
                        'name' => 'where',
                        'orig' => 'where',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/explore/v2.1/catalog/datasets/vornamen-der-neugeborenen-kanton-stgallen-seit-1987/records',
                  'segments' => [
                    [
                      'lit' => 'explore',
                    ],
                    [
                      'lit' => 'v2.1',
                    ],
                    [
                      'lit' => 'catalog',
                    ],
                    [
                      'lit' => 'datasets',
                    ],
                    [
                      'lit' => 'vornamen-der-neugeborenen-kanton-stgallen-seit-1987',
                    ],
                    [
                      'lit' => 'records',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'group_by',
                      'limit',
                      'offset',
                      'order_by',
                      'refine_geschlecht',
                      'refine_jahr',
                      'refine_vorname',
                      'select',
                      'timezone',
                      'where',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                  'parts' => [
                    'explore',
                    'v2.1',
                    'catalog',
                    'datasets',
                    'vornamen-der-neugeborenen-kanton-stgallen-seit-1987',
                    'records',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return NeugeborenenVornamenKantonStgallenFeatures::make_feature($name);
    }
}
