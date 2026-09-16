package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewMetadataEntityFunc func(client *NeugeborenenVornamenKantonStgallenSDK, entopts map[string]any) NeugeborenenVornamenKantonStgallenEntity

var NewRecordEntityFunc func(client *NeugeborenenVornamenKantonStgallenSDK, entopts map[string]any) NeugeborenenVornamenKantonStgallenEntity

