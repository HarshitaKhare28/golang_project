package main

import (
    "net/http"
    "fmt"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello from Go backend!")
}

func main() {
    http.HandleFunc("/api/hello", helloHandler)
    fmt.Println("Server started at http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}
