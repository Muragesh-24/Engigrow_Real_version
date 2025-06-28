FROM golang:1.24-alpine

WORKDIR /app

COPY go.mod go.sum .air.toml ./
RUN go mod download

COPY . .

RUN apk add --no-cache netcat-openbsd git && \
    go install github.com/air-verse/air@latest

COPY wait-for-db.sh /app/wait-for-db.sh
RUN chmod +x /app/wait-for-db.sh

EXPOSE 8080

CMD ["/app/wait-for-db.sh", "/go/bin/air"]
