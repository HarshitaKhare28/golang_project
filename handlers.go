package main

import (
	"encoding/json"
	"net/http"
	"strconv"
)

func addCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
}

// Get all notes
func getNotesHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)

	if r.Method == http.MethodOptions {
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(notes)
}

// Create a new note
func createNoteHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)

	if r.Method == http.MethodOptions {
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var note Note
	err := json.NewDecoder(r.Body).Decode(&note)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	note.ID = nextID
	nextID++
	notes = append(notes, note)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(note)
}

// Update an existing note
func updateNoteHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)

	if r.Method == http.MethodOptions {
		return
	}

	if r.Method != http.MethodPut {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var updated Note
	err := json.NewDecoder(r.Body).Decode(&updated)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	for i, n := range notes {
		if n.ID == updated.ID {
			notes[i].Text = updated.Text
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(notes[i])
			return
		}
	}

	http.Error(w, "Note not found", http.StatusNotFound)
}

// Delete a note by ID
func deleteNoteHandler(w http.ResponseWriter, r *http.Request) {
	addCORS(w)

	if r.Method == http.MethodOptions {
		return
	}

	if r.Method != http.MethodDelete {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	for i, n := range notes {
		if n.ID == id {
			notes = append(notes[:i], notes[i+1:]...)
			w.WriteHeader(http.StatusNoContent)
			return
		}
	}

	http.Error(w, "Note not found", http.StatusNotFound)
}
