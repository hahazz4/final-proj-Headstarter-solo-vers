"use client";
import { useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { SidebarComponent } from "@/components/sidebar-component";
import { useUser } from "@clerk/nextjs";

const words = [
  { text: "Saving" },
  { text: "you," },
  { text: "one" },
  { text: "prompt", className: "text-red-500 dark:text-red-500" },
  { text: "at" },
  { text: "a" },
  { text: "time." },
];

export default function Home() {
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="relative max-w-screen-md mx-auto p-4">
      {/* Sidebar Toggle Button */}
      <button
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
        {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar Component */}
      <SidebarComponent open={sidebarOpen} setOpen={setSidebarOpen}/>

      <div id="hero" className="justify-center items-center text-center mt-[30vh]">
        <div className="flex text-center justify-center items-center">
          <h1 className="text-5xl font-bold text-red-500">W</h1>
          <h1 className="text-5xl font-bold">Prompt</h1>
        </div>

        <h5 className="py-10 italic">
          <TypewriterEffect words={words} />
        </h5>

        <Link href="/generate-page/">
          <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            Get Started
          </button>
        </Link>

        {isLoaded && isSignedIn && (
          <Link href="/user-prompts/">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4">
              View Saved Prompts
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
