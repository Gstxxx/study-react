'use client'
import NavBar from "./NavBar";
import { useContext, useEffect } from "react";
import ThemeContext from "../context/themeContext";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
            <NavBar />
            {children}
        </div>
    );
}