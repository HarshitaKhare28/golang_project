"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [notes, setNotes] = useState<{ id: number; text: string }[]>([]);
  const [newNote, setNewNote] = useState<string>("");

  useEffect(() => {
    fetchAndSet("http://localhost:8080/api/notes", ""); // fetch notes directly
  }, []);

  const fetchAndSet = async (url: string, field: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (field) {
        setMessage(data[field]);
      } else {
        setNotes(data);
      }
    } catch (err) {
      console.error(err);
      setMessage("Error fetching data");
    }
  };

  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/notes");
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addNote = async () => {
    if (!newNote.trim()) return;
    try {
      await fetch("http://localhost:8080/api/notes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newNote }),
      });
      setNewNote("");
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      await fetch(`http://localhost:8080/api/notes/delete?id=${id}`, {
        method: "DELETE",
      });
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 p-8">
      <main className="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center animate-pop">
        <Image
          className="mx-auto mb-4"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow mb-4">
          Next.js + Go Backend 🚀
        </h1>

        <p className="text-white/90 text-base sm:text-lg font-mono mb-6">
          Your notes (CRUD with Go backend):
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <button
            onClick={() => fetchAndSet("http://localhost:8080/api/notes", "")}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
          >
            Refresh Notes
          </button>
        </div>

        {/* CRUD: add new note */}
        <div className="mt-6">
          <input
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Enter new note"
            className="px-3 py-2 rounded border text-black mr-2"
          />
          <button
            onClick={addNote}
            className="bg-teal-600 text-white px-3 py-2 rounded hover:bg-teal-700 transition"
          >
            Add Note
          </button>
        </div>

        {/* List notes */}
        <div className="mt-4 space-y-2">
          {notes.map((note) => (
            <div
              key={note.id}
              className="flex items-center justify-between bg-white/50 px-3 py-2 rounded shadow text-black"
            >
              <span>{note.text}</span>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-10 text-white/80 text-sm">
        Crafted with ❤️ using Next.js & Go
      </footer>
    </div>
  );
}
