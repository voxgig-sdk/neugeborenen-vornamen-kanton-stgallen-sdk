package core

type NeugeborenenVornamenKantonStgallenError struct {
	IsNeugeborenenVornamenKantonStgallenError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNeugeborenenVornamenKantonStgallenError(code string, msg string, ctx *Context) *NeugeborenenVornamenKantonStgallenError {
	return &NeugeborenenVornamenKantonStgallenError{
		IsNeugeborenenVornamenKantonStgallenError: true,
		Sdk:              "NeugeborenenVornamenKantonStgallen",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NeugeborenenVornamenKantonStgallenError) Error() string {
	return e.Msg
}
