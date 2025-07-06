# 📝 Next.js + Go Backend Notes App

This project is a **small proof of concept** showing how a Go backend can perform CRUD operations (create, read, delete) and connect seamlessly with a modern Next.js frontend.

It isn’t a production-ready app — just a lightweight setup to practice full-stack basics, build a simple notes feature, and learn how frontend & backend can talk over APIs.

---

## ✨ What this project does
- Starts a simple **Go HTTP server** with these endpoints:
  - `GET /api/notes` → get all notes
  - `POST /api/notes/create` → add a new note
  - `DELETE /api/notes/delete?id=ID` → delete a note
- Uses **Next.js frontend** (TypeScript) to:
  - Display the list of notes
  - Add new notes
  - Delete notes
- Styled with **Tailwind CSS** → gradient background, rounded cards, smooth animations
- Uses ESLint for clean & consistent code

---

## 🛠 **Tech stack & tools used**
- **Frontend:**
  - [Next.js](https://nextjs.org/) (App Router)
  - **TypeScript**
  - **Tailwind CSS**
  - **ESLint**
- **Backend:**
  - **Go** (Golang)
  - Standard `net/http` package
- **Others:**
  - HTML, CSS
  - Simple in-memory data storage for notes

---

## 📂 **Folder structure (important files only)**
```plaintext
golang_project/
  ├── main.go           # Go backend main entry
  ├── handlers.go       # Handlers for CRUD
  └── models.go         # Note model

my-next-app/
  └── src/app/page.tsx       # Next.js frontend page
  └── src/app/globals.css    # Tailwind + animation CSS
  └── tailwind.config.js
  └── tsconfig.json
  └── package.json
  └── next.config.js

## 🚀 How to run locally
In one terminal 
```
cd golang_project
go run main.go
```
In another terminal
```
cd my-next-app
npm install
npm run dev
```
Then open your browser at:
```link
👉 http://localhost:3000
```

