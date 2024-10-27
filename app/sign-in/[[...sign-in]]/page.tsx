"use client"
import { SignIn } from "@clerk/nextjs";
import { SidebarComponent } from "@/components/sidebar-component";
import { useState } from "react";

export default function SignInPage(){
    const [ sidebarOpen, setSidebarOpen ] = useState(false);
    return(
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
                <h5 className="py-10 italic">Sign In</h5>
                <SignIn/>
            </div>
        </div>
    )
}
