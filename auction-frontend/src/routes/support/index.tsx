import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/support/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { t } = useTranslation();
    const [faqInfo, setFaqInfo] = useState({});

    useEffect(() => {
        const currLang = localStorage.getItem("i18nextLng") ?? "en";
        fetch(`${import.meta.env.VITE_API_URL}/messages/${currLang}`)
            .then((response) => response.json())
            .then((data) => {
                setFaqInfo({});
                for (const key in data) {
                    if (key.startsWith("faq_title")) {
                        const text = key.replace(
                            "faq_title",
                            "faq_description"
                        );
                        setFaqInfo((prev) => ({
                            ...prev,
                            [data[key]]: data[text],
                        }));
                    }
                }
            });
    }, [localStorage.getItem("i18nextLng")]);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[80ch] py-4">
                <h1 className="text-4xl font-bold">{t("support.faq")}</h1>
                {Object.entries(faqInfo).map(([key, value]) => (
                    <div key={key} className="my-4">
                        <h2 className="text-2xl font-bold">{key}</h2>
                        <p className="text-md">{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
