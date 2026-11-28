package core

import "errors"

var ErrArticleNotFound = errors.New("published article not found")

var ErrPracticeNotFound = errors.New("published practice not found")

type ValidationError struct {
	Message string
}

func (e ValidationError) Error() string {
	return e.Message
}
