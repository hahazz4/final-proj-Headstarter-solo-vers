"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithButton() {
    return (
      <div className="grid w-full gap-2 mt-10">
        <Textarea placeholder="Type your message here." />
        <Link href="/">
          <Button className="bg-red-500 hover:bg-red-400 text-white font-bold w-full border-b-4 border-red-700 hover:border-red-500 rounded">
            Improve Prompt
          </Button>
        </Link>
      </div>
    )
}

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <div id="hero" className="justify-center items-center text-center mt-[30vh]">
        <h1 className="text-5xl font-bold">WPrompt</h1>
        <TextareaWithButton/>
      </div>
    </div>
  );
}
