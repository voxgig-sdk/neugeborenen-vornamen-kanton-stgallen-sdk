package voxgigneugeborenenvornamenkantonstgallensdk

import (
	"github.com/voxgig-sdk/neugeborenen-vornamen-kanton-stgallen-sdk/core"
	"github.com/voxgig-sdk/neugeborenen-vornamen-kanton-stgallen-sdk/entity"
	"github.com/voxgig-sdk/neugeborenen-vornamen-kanton-stgallen-sdk/feature"
	_ "github.com/voxgig-sdk/neugeborenen-vornamen-kanton-stgallen-sdk/utility"
)

// Type aliases preserve external API.
type NeugeborenenVornamenKantonStgallenSDK = core.NeugeborenenVornamenKantonStgallenSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NeugeborenenVornamenKantonStgallenEntity = core.NeugeborenenVornamenKantonStgallenEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NeugeborenenVornamenKantonStgallenError = core.NeugeborenenVornamenKantonStgallenError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMetadataEntityFunc = func(client *core.NeugeborenenVornamenKantonStgallenSDK, entopts map[string]any) core.NeugeborenenVornamenKantonStgallenEntity {
		return entity.NewMetadataEntity(client, entopts)
	}
	core.NewRecordEntityFunc = func(client *core.NeugeborenenVornamenKantonStgallenSDK, entopts map[string]any) core.NeugeborenenVornamenKantonStgallenEntity {
		return entity.NewRecordEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNeugeborenenVornamenKantonStgallenSDK = core.NewNeugeborenenVornamenKantonStgallenSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
