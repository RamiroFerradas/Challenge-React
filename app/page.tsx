"use client";
import { Navbar } from "./components";
import { Home } from "./Home";

export default function App() {
  return (
    <main className="bg-gray-200 h-screen flex flox-col justify-center items-center">
      <Navbar />
      <Home />
    </main>
  );
}
