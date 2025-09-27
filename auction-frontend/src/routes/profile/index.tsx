import AddItemForm from "@/components/AddItemForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isTokenValid } from "@/lib/auth";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/profile/")({
    component: RouteComponent,
});

function RouteComponent() {
    const nav = useNavigate();
    const [name, setName] = useState("");

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token");
            const response = await isTokenValid(token);
            if (!response.success) {
                localStorage.removeItem("token");
                nav({ to: "/login" });
            }
            setName(response.message);
        })();
    }, []);

    return (
        <div className="mx-auto flex w-full max-w-[800px] flex-col justify-center gap-4 p-4">
            <div className="text-5xl font-bold">Welcome back, {name}</div>
            <h2 className="text-4xl font-bold">List new item</h2>
            <AddItemForm />
        </div>
    );
}
