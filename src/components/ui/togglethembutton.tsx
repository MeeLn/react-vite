"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    // Read theme from localStorage (client only)
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    setIsDarkMode(isDark);

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const changeTheme = () => {
    if (isDarkMode === null) return;

    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Do NOT render anything until mounted
  if (isDarkMode === null) return null;

  return (
    <button
      onClick={changeTheme}
      className="fixed cursor-pointer z-50 lg:bottom-6 lg:left-6 bottom-16 left-6 px-2 py-2 
      rounded-full bg-muted text-primary border-2 border-primary 
      hover:bg-primary hover:text-white transition"
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
