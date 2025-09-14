import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";
import Icon from "./Icon";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="border-border flex items-center justify-between border-b bg-transparent px-6 py-3">
            <div className="flex gap-4">
                <Icon></Icon>
                <Button variant={"ghost"} onClick={() => navigate({ to: "/" })}>
                    Home
                </Button>
                <Button
                    variant={"ghost"}
                    onClick={() => navigate({ to: "/auction" })}
                >
                    Auction
                </Button>
                <Button
                    variant={"ghost"}
                    onClick={() => navigate({ to: "/profile" })}
                >
                    My profile
                </Button>
            </div>
            <DarkModeToggle />
        </header>
    );
}
