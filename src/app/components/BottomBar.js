"use client";
import React from 'react'
import {
    Home,
    Search,
    PlusSquare,
    Heart,
    User,
} from "lucide-react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function BottomBar() {
    const pathname = usePathname();
    // list menu
    const menus = [
        { href: "/", icon: Home },
        { href: "/search", icon: Search },
        { href: "/create", icon: PlusSquare },
        { href: "/activity", icon: Heart },
        { href: "/profile", icon: User },
    ];

    return (
        <div className='fixed bottom-4 w-full max-w-md h-12 flex items-center justify-between px-4 z-10'>
            <div className="flex justify-between text-white bg-sky-800 rounded-2xl p-4 max-w-md w-full">
                {menus.map((menu) => {
                    const Icon = menu.icon;
                    const active =
                        pathname === menu.href ||
                        (menu.href !== "/" && pathname.startsWith(menu.href));

                    return (
                        <Link
                            key={menu.href}
                            href={menu.href}
                            className={`flex items-center justify-center`}
                        >
                            <Icon
                                strokeWidth={active ? 2.5 : 1.8}
                                className={active ? "text-sky-50" : "text-gray-400"}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}
