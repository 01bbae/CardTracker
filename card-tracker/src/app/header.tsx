'use client';

import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row border-b-2">
            <Link href="/">
                <div className="font-comfortaa my-4 p-4 text-4xl">
                    Card Tracker
                </div>
            </Link>
            <div></div>
        </div>
    )
}