import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import Icon from "./Icon";
import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "react-i18next";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "./ui/dropdown-menu";

export default function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        document.dir = language === "ar" ? "rtl" : "ltr";
    };

    return (
        <header className="border-border flex items-center justify-between border-b bg-transparent px-6 py-3">
            <div className="flex items-center gap-2">
                <Icon></Icon>
                <Link
                    className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-lg px-3 py-2 font-semibold transition-colors"
                    to="/"
                >
                    {t("header.home")}
                </Link>
                <Link
                    className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-lg px-3 py-2 font-semibold transition-colors"
                    to="/auction"
                >
                    {t("header.auction")}
                </Link>
                <Link
                    className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-lg px-3 py-2 font-semibold transition-colors"
                    to="/profile"
                >
                    {t("header.profile")}
                </Link>
            </div>
            <div className="flex gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">🌐</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="*:cursor-pointer"
                    >
                        <DropdownMenuItem onClick={() => changeLanguage("en")}>
                            English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeLanguage("ja")}>
                            日本語
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeLanguage("ar")}>
                            العربية
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DarkModeToggle />
            </div>
        </header>
    );
}
