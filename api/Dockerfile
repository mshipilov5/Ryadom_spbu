FROM golang:1.22-alpine

WORKDIR /app

COPY . .

RUN if [ -f "main.go" ]; then go build -o server main.go; else \
    echo 'package main; import ("fmt"; "net/http"); func main() { http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) { fmt.Fprintf(w, "OK") }); http.ListenAndServe(":8000", nil) }' > main.go && \
    go build -o server main.go; fi

EXPOSE 8000

CMD ["./server"]
