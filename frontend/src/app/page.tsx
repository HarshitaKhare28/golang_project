"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

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

        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-md text-lg sm:text-xl font-semibold transition-transform transform hover:scale-105">
          {message || "Loading..."}
        </div>
      </main>

      <footer className="mt-10 text-white/80 text-sm">
        Crafted with ❤️ using Next.js & Go
      </footer>
    </div>
  );
}
