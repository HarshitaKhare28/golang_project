# 🦫 Next.js + Go Backend Test Project

This project is a **small proof of concept** to explore how a Go backend can work seamlessly with a modern Next.js frontend.

It isn’t a production-ready application — just a lightweight setup to test APIs, learn how to connect the two, and see live data flowing from Go to Next.js.
Ideal for practicing full-stack basics and experimenting with integration!

---

## ✨ What this project does
- Starts a small **Go HTTP server** with multiple endpoints:
  - `/api/hello` → returns hello message
  - `/api/time` → returns current server time
  - `/api/random` → returns random number
  - `/api/quote` → returns random quote
  - `/api/greet?name=Harshita` → returns greeting
- Uses **Next.js frontend** (with TypeScript) to call these APIs and show results
- Styled with **Tailwind CSS** + light animations & gradients
- Uses ESLint for linting and clean code

---

## 🛠 **Tech stack & tools used**
- **Frontend:**
  - [Next.js](https://nextjs.org/) (App Router)
  - **TypeScript**
  - **Tailwind CSS**
  - **ESLint** (auto-added during project setup to keep code clean)
- **Backend:**
  - **Go** (Golang)
  - Standard `net/http` package
- **Others:**
  - HTML, CSS
  - Random number generation, quotes etc. for testing

---

## 📂 **Folder structure (important files only)**
```plaintext
golang_project/
  └── main.go                # Go backend

my-next-app/
  └── src/app/page.tsx       # Next.js frontend page
  └── src/app/globals.css    # Tailwind + animation CSS
  └── tailwind.config.js
  └── tsconfig.json
  └── package.json
  └── next.config.js
```
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

