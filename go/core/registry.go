package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMetadataEntityFunc func(client *NeugeborenenVornamenKantonStgallenSDK, entopts map[string]any) NeugeborenenVornamenKantonStgallenEntity

var NewRecordEntityFunc func(client *NeugeborenenVornamenKantonStgallenSDK, entopts map[string]any) NeugeborenenVornamenKantonStgallenEntity

