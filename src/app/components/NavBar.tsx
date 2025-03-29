"use client"

import { useContext } from "react";
import ThemeContext from "../context/themeContext";
import Link from "next/link";


export default function NavBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="flex justify-between items-center p-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <button onClick={toggleTheme}>{theme}</button>
        </nav>
    )
}