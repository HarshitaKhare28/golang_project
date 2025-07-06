package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"
)

var quotes = []string{
	"Stay hungry, stay foolish.",
	"Code is like humor. When you have to explain it, it’s bad.",
	"Simplicity is the soul of efficiency.",
}

func main() {
	http.HandleFunc("/api/hello", helloHandler)
	http.HandleFunc("/api/time", timeHandler)
	http.HandleFunc("/api/random", randomHandler)
	http.HandleFunc("/api/quote", quoteHandler)
	http.HandleFunc("/api/greet", greetHandler)

	fmt.Println("Server started at http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"message": "Hello from Go backend!"}`)
}

func timeHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)
	w.Header().Set("Content-Type", "application/json")
	t := time.Now().Format(time.RFC1123)
	fmt.Fprintf(w, `{"time": "%s"}`, t)
}

func randomHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)
	w.Header().Set("Content-Type", "application/json")
	n := rand.Intn(100)
	fmt.Fprintf(w, `{"random": %d}`, n)
}

func quoteHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)
	w.Header().Set("Content-Type", "application/json")
	n := rand.Intn(len(quotes))
	fmt.Fprintf(w, `{"quote": "%s"}`, quotes[n])
}

func greetHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)
	w.Header().Set("Content-Type", "application/json")
	name := r.URL.Query().Get("name")
	if name == "" {
		name = "Guest"
	}
	fmt.Fprintf(w, `{"greeting": "Hello, %s!"}`, name)
}

func addCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
}
