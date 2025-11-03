import AddItemForm from "@/components/AddItemForm";
import { isTokenValid } from "@/lib/auth";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/profile/")({
    component: RouteComponent,
});

function RouteComponent() {
    const nav = useNavigate();
    const [name, setName] = useState("");
    const { t } = useTranslation();

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token");
            const response = await isTokenValid(token);
            if (!response.success) {
                localStorage.removeItem("token");
                nav({ to: "/login" });
            }
            const json = JSON.parse(response.message);
            localStorage.setItem("user_id", json.id);
            setName(json.username);
        })();
    }, []);

    return (
        <div className="mx-auto flex w-full max-w-[800px] flex-col justify-center gap-4 p-4">
            <div className="text-5xl font-bold">
                {t("profile.title")} {name}
            </div>
            <h2 className="text-4xl font-bold">{t("profile.list_new_item")}</h2>
            <AddItemForm />
        </div>
    );
}
