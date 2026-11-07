package core

import "errors"

var ErrArticleNotFound = errors.New("published article not found")

type ValidationError struct {
	Message string
}

func (e ValidationError) Error() string {
	return e.Message
}
