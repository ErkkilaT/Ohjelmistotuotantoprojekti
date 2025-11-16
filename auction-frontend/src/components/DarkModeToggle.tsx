import { useState } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export default function DarkModeToggle() {
    const { t } = useTranslation();
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
                    globalThis.matchMedia("(prefers-color-scheme: dark)")
                        .matches)
        );
    };

    return (
        <Button onClick={toggleTheme}>
            {theme === "dark"
                ? t("header.theme_light")
                : t("header.theme_dark")}
        </Button>
    );
}
