import { createFileRoute, Link } from "@tanstack/react-router";
import {
    RiAuctionLine,
    RiTimer2Line,
    RiVipCrownLine,
    RiArrowRightLine,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
    component: App,
});

function App() {
    const { t } = useTranslation();

    return (
        <>
            <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20 opacity-40" />
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

                <div className="container mx-auto px-6 md:px-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
                            {t("main.title1")}
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                {t("main.title2")}
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-neutral-800 dark:text-neutral-300">
                            {t("main.description")}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/auction"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                            >
                                {t("main.button.explore")}
                                <RiArrowRightLine />
                            </Link>
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 font-semibold text-neutral-900 transition hover:bg-neutral-400/10 dark:text-neutral-100 dark:hover:bg-neutral-800/50"
                            >
                                {t("main.button.start")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-50 py-20 dark:bg-neutral-900">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="group relative rounded-2xl border border-neutral-200 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800/40">
                            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md shadow-blue-500/20">
                                <RiTimer2Line className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                {t("main.perks.first.title")}
                            </h3>
                            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                {t("main.perks.first.desc")}
                            </p>
                        </div>
                        <div className="group relative rounded-2xl border border-neutral-200 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800/40">
                            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md shadow-blue-500/20">
                                <RiVipCrownLine className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                {t("main.perks.second.title")}
                            </h3>
                            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                {t("main.perks.second.desc")}
                            </p>
                        </div>
                        <div className="group relative rounded-2xl border border-neutral-200 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800/40">
                            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md shadow-blue-500/20">
                                <RiAuctionLine className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                {t("main.perks.third.title")}
                            </h3>
                            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                {t("main.perks.third.desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-950 py-20">
                <div className="container mx-auto px-6 md:px-10">
                    <h2 className="text-3xl font-bold text-neutral-50">
                        {t("main.footer.title")}
                    </h2>
                    <div className="mb-10 flex items-center justify-between">
                        <Link
                            to="/auction"
                            className="flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300"
                        >
                            {t("main.footer.view_current_item")}
                            <RiArrowRightLine />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3"></div>
                </div>
            </section>
        </>
    );
}
