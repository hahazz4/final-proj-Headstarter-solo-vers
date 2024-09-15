"use client"
// import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function TextareaWithButton() {
    return (
        <div className="grid w-full gap-2 mt-10">
            <Label className="text-left" htmlFor="message">Your Prompt</Label>
            <Textarea placeholder="Type or paste your prompt here."/>
            <Link href="/">
            <Button className="bg-red-500 hover:bg-red-400 text-white font-bold w-full border-b-4 border-red-700 hover:border-red-500 rounded">
                Improve Prompt
            </Button>
            </Link>
        </div>
    )
}

export default function GeneratePage() {
    return (
        <div className="max-w-screen-md mx-auto p-4">
        <div id="hero" className="justify-center items-center text-center mt-[30vh]">
        <div className="flex text-center justify-center items-center"><h1 className="text-5xl font-bold text-red-500">W</h1><h1 className="text-5xl font-bold">Prompt</h1></div>
            <TextareaWithButton/>
        </div>
        {/* <Spinner label="Loading..." color="danger" /> */}
        </div>
    );
}
