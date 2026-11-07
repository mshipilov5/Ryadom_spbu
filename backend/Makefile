.PHONY: run test build fmt lint

run:
	go run ./cmd

test:
	go test ./...

build:
	mkdir -p bin
	go build -o bin/ryadom-api ./cmd

fmt:
	gofmt -w $$(rg --files -g '*.go')

lint:
	go vet ./...
