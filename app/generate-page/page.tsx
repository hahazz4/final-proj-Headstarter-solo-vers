"use client"
// import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

type Prompt = {
    title: string;
    prompt: string;
}

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

function DisplayPrompt(){
    const dispPrompts = useQuery(api.functions.listPrompts);
    return (
        <div className="max-w-screen-md mx-auto p-4">
            {dispPrompts?.map(({ title, prompt }, index) => (
                <div key={index} className="p-4 border rounded-md my-2">
                    <h3 className="font-bold text-white text-xl">{title}</h3>
                    <p className="text-white">{prompt}</p>
                </div>
            )) || <p>Loading prompts...</p>}
        </div>
    );
}

export default function GeneratePage() {
    return (
        <div className="max-w-screen-md mx-auto p-4">
            <div id="hero" className="justify-center items-center text-center mt-[30vh]">
                <div className="flex text-center justify-center items-center">
                    <h1 className="text-5xl font-bold text-red-500">W</h1>
                    <h1 className="text-5xl font-bold">Prompt</h1>
                </div>
                <TextareaWithButton/>
                <DisplayPrompt/>
            </div>
        </div>
    );
}
