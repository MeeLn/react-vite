import { useState, useEffect } from "react";

export default function ToggleTheme() {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved === "dark") return true;
            if (saved === "light") return false;

            // If nothing is saved → use system preference
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return systemPrefersDark;
        }

        return true; 
    });

    useEffect(() => {
        if (!isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    function changeTheme() {
        setIsDarkMode(!isDarkMode);
    }

    return(
        <button
            onClick={changeTheme}
            className="fixed lg:bottom-6 lg:left-6 bottom-16 left-6 px-4 py-3 
                rounded-full bg-muted text-primary border-2 border-primary 
                hover:bg-primary hover:text-white transition">
            <i className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
        </button>
    );
}