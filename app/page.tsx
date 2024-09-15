"use client"
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Saving",
  },
  {
    text: "your",
  },
  {
    text: "ass,",
  },
  {
    text: "one",
  },
  {
    text: "prompt",
    className: "text-red-500 dark:text-red-500",
  },
  {
    text: "at",
  },
  {
    text: "a",
  },
  {
    text: "time.",
  },
];

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <div id="hero" className="justify-center items-center text-center mt-[30vh]">
        <div className="flex text-center justify-center items-center"><h1 className="text-5xl font-bold text-red-500">W</h1><h1 className="text-5xl font-bold">Prompt</h1></div>
        <h5 className="py-10 italic"><TypewriterEffect words={words}/></h5>
        <Link href="/generate-page/">
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
