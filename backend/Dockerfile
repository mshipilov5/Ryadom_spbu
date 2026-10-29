FROM golang:1.22-alpine AS build

WORKDIR /src

COPY go.mod ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o /out/ryadom-api ./cmd

FROM alpine:3.20

RUN adduser -D -H -u 10001 appuser
USER appuser

COPY --from=build /out/ryadom-api /usr/local/bin/ryadom-api

EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/ryadom-api"]
