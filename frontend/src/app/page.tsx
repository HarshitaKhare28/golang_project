"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  const fetchAndSet = async (url: string, field: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMessage(data[field]);
    } catch (err) {
      console.error(err);
      setMessage("Error fetching data");
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
          Live message from your Go backend:
        </p>

        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-md text-lg sm:text-xl font-semibold transition-transform transform hover:scale-105 mb-4">
          {message || "Loading..."}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <button
            onClick={() => fetchAndSet("http://localhost:8080/api/hello", "message")}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
          >
            Hello
          </button>
          <button
            onClick={() => fetchAndSet("http://localhost:8080/api/time", "time")}
            className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition"
          >
            Show Time
          </button>
          <button
            onClick={() => fetchAndSet("http://localhost:8080/api/random", "random")}
            className="bg-pink-600 text-white px-3 py-2 rounded hover:bg-pink-700 transition"
          >
            Random Number
          </button>
          <button
            onClick={() => fetchAndSet("http://localhost:8080/api/quote", "quote")}
            className="bg-yellow-600 text-white px-3 py-2 rounded hover:bg-yellow-700 transition"
          >
            Random Quote
          </button>
          <button
            onClick={() => fetchAndSet("http://localhost:8080/api/greet?name=Harshita", "greeting")}
            className="bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 transition"
          >
            Greet Me
          </button>
        </div>
      </main>

      <footer className="mt-10 text-white/80 text-sm">
        Crafted with ❤️ using Next.js & Go
      </footer>
    </div>
  );
}
