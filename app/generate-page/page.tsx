"use client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { SidebarComponent } from "@/components/sidebar-component";

interface TextareaWithButtonType {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: () => void;
}

function TextareaWithButton({ prompt, setPrompt, handleSubmit }: TextareaWithButtonType) {
    return (
        <div className="grid w-full gap-2 mt-10">
            <Label className="text-left" htmlFor="message">
                Your Prompt
            </Label>
            <Textarea placeholder="Type or paste your prompt here." value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
            <Button
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-400 text-white font-bold w-full border-b-4 border-red-700 hover:border-red-500 rounded">
                Improve Prompt
            </Button>
        </div>
    );
}

interface ImPromptType{
    imPrompt: string;
}

function ImprovedPrompt({imPrompt}: ImPromptType){
    return (
        <div className="p-4 mt-4 border rounded-md bg-gray-100">
            <h3 className="font-bold text-xl text-black">Improved Prompt:</h3>
            <p className="text-black">{imPrompt}</p>
        </div>
    );
}

export default function GeneratePage() {
    const [prompt, setPrompt] = useState("");
    const [imPrompt, setImPrompt] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const savePrompt = useMutation(api.functions.createPrompt);
    const handleSubmit = async () => {
        const improvedPrompt = `Improved: ${prompt}`;
        setImPrompt(improvedPrompt);
        await savePrompt({ title: "Generated Title", prompt: improvedPrompt });
    };

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

            <div id="hero" className="justify-center items-center text-center mt-[25vh]">
                <div className="flex text-center justify-center items-center">
                    <h1 className="text-5xl mr-4 font-bold text-red-500">Summon</h1>
                    <h1 className="text-5xl font-bold">Your Prompt</h1>
                </div>
                {/* Input Section */}
                <TextareaWithButton
                prompt={prompt}
                setPrompt={setPrompt}
                handleSubmit={handleSubmit}/>

                {/* Improved Prompt Display Section */}
                {imPrompt && <ImprovedPrompt imPrompt={imPrompt}/>}
            </div>
        </div>
    );
}
