import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";
import Icon from "./Icon";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="border-border flex items-center justify-between border-b bg-transparent px-6 py-3">
            <div className="flex items-center gap-2">
                <Icon></Icon>
                <Link
                    className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-lg px-3 py-2 font-semibold transition-colors"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-lg px-3 py-2 font-semibold transition-colors"
                    to="/auction"
                >
                    Auction
                </Link>
                <Link
                    className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 rounded-lg px-3 py-2 font-semibold transition-colors"
                    to="/profile"
                >
                    My profile
                </Link>
            </div>
            <DarkModeToggle />
        </header>
    );
}
