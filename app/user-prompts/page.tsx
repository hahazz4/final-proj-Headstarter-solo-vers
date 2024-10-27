"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { SidebarComponent } from "@/components/sidebar-component";
import { Id } from "@/convex/_generated/dataModel";

function DisplayPrompt() {
    const dispPrompts = useQuery(api.functions.listPrompts);
    const updatePrompt = useMutation(api.functions.updatePrompt);

    const [editMode, setEditMode] = useState<number | null>(null);
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedPrompt, setUpdatedPrompt] = useState("");

    const handleEdit = (index: number, title: string, prompt: string) => {
        setEditMode(index);
        setUpdatedTitle(title);
        setUpdatedPrompt(prompt);
    };

    const handleSave = async (id: Id<"prompts">) => {
        await updatePrompt({ id, title: updatedTitle, prompt: updatedPrompt });
        setEditMode(null);
    };

    return (
        <div className="max-w-screen-md mx-auto p-4">
        {dispPrompts?.map(({ _id, title, prompt }, index) => (
            <div key={index} className="p-4 border rounded-md my-2">
            {editMode === index ? (
                <>
                <input
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    className="text-xl font-bold text-white w-full mb-2"/>
                <textarea
                    value={updatedPrompt}
                    onChange={(e) => setUpdatedPrompt(e.target.value)}
                    className="text-white w-full mb-2"/>
                <button
                    onClick={() => handleSave(_id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Save
                </button>
                </>
            ) : (
                <>
                <h3 className="font-bold text-white text-xl">{title}</h3>
                <p className="text-white">{prompt}</p>
                <button
                    onClick={() => handleEdit(index, title, prompt)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                    Edit
                </button>
                </>
            )}
            </div>
        )) || <p>Loading your saved prompts...</p>}
        </div>
    );
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative max-w-screen-md mx-auto p-4">
        {/* Sidebar Toggle Button */}
        <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
            {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>

        {/* Sidebar Component */}
        <SidebarComponent open={sidebarOpen} setOpen={setSidebarOpen} />

        <div id="hero" className="justify-center items-center text-center mt-[20vh]">
            <div className="flex text-center justify-center items-center">
            <h1 className="text-5xl font-bold text-red-500">W</h1>
            <h1 className="text-5xl font-bold">Prompt</h1>
            </div>
            <h5 className="py-10 italic">Your Prompts</h5>

            {/* Display and Edit Saved Prompts */}
            <DisplayPrompt />
        </div>
    </div>
  );
}
