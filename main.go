package main

import (
	"fmt"
	"net/http"
)

var notes = []Note{}
var nextID = 1

func main() {
	// CRUD routes
	http.HandleFunc("/api/notes", getNotesHandler)          // GET
	http.HandleFunc("/api/notes/create", createNoteHandler) // POST
	http.HandleFunc("/api/notes/update", updateNoteHandler) // PUT
	http.HandleFunc("/api/notes/delete", deleteNoteHandler) // DELETE

	fmt.Println("Server started at http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
