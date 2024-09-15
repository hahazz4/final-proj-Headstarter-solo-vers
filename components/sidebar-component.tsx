"use client";
import Link from "next/link";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconUserBolt,
} from "@tabler/icons-react";

export function SidebarComponent({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    const links = [
        {
        label: "Dashboard",
        href: "/",
        icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
        {
        label: "Improve Prompt",
        href: "/generate-page/",
        icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
        {
        label: "Saved Prompts",
        href: "/user-prompts/",
        icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
        {
        label: "Logout",
        href: "#",
        icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
    ];

    return (
        <div className={`fixed inset-y-0 left-0 z-50 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="bg-gray-900 h-full w-64 p-4">
            <button
            onClick={() => setOpen(false)}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mb-4"
            >
            Close Sidebar
            </button>
            <nav>
            {links.map((link, index) => (
                <Link key={index} href={link.href} passHref>
                <div className="flex items-center space-x-3 my-4 cursor-pointer text-white">
                    {link.icon}
                    <span>{link.label}</span>
                </div>
                </Link>
            ))}
            </nav>
        </div>
        </div>
    );
}
