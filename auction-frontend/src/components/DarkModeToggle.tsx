import { useState } from "react";
import { Button } from "./ui/button";

export default function DarkModeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const toggleTheme = () => {
        const originalTheme = localStorage.getItem("theme");
        const newTheme = originalTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle(
            "dark",
            localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    };

    return (
        <Button onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
        </Button>
    );
}
