import { createFileRoute, Link } from "@tanstack/react-router";
import {
    RiAuctionLine,
    RiTimer2Line,
    RiVipCrownLine,
    RiArrowRightLine,
} from "react-icons/ri";
export const Route = createFileRoute("/")({
    component: App,
});

const perks = [
    {
        icon: <RiTimer2Line className="h-6 w-6" />,
        title: "Real-time bidding",
        desc: "Sub-millisecond updates powered by WebSockets.",
    },
    {
        icon: <RiVipCrownLine className="h-6 w-6" />,
        title: "Verified sellers",
        desc: "Every high-value item is authenticated by our partners.",
    },
    {
        icon: <RiAuctionLine className="h-6 w-6" />,
        title: "Zero-fee first month",
        desc: "Sell without commission for 30 days when you sign up today.",
    },
];

function App() {
    return (
        <>
            <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-400/20 opacity-40" />
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

                <div className="container mx-auto px-6 md:px-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
                            Bid on what matters.
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Win with confidence.
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-neutral-800 dark:text-neutral-300">
                            The fastest, most transparent auction house on the
                            web. Authenticated items, instant settlement, and
                            industry-leading buyer protection.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/auction"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                            >
                                Explore live auctions
                                <RiArrowRightLine />
                            </Link>
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 font-semibold text-neutral-900 transition hover:bg-neutral-400/10 dark:text-neutral-100 dark:hover:bg-neutral-800/50"
                            >
                                Start selling
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-50 py-20 dark:bg-neutral-900">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="grid gap-8 md:grid-cols-3">
                        {perks.map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="group relative rounded-2xl border border-neutral-200 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800/40"
                            >
                                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md shadow-blue-500/20">
                                    {icon}
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                                    {title}
                                </h3>
                                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-neutral-950 py-20">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-neutral-50">
                            Upcoming items
                        </h2>
                        <Link
                            to="/auction"
                            className="flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300"
                        >
                            View all <RiArrowRightLine />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition hover:bg-neutral-900"
                            >
                                <img
                                    src={`https://source.unsplash.com/600x400?gadget&sig=${i}`}
                                    alt="lot"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-5">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-semibold text-neutral-100">
                                                Lot #{(i + 1) * 342}
                                            </h3>
                                            <p className="text-sm text-neutral-400">
                                                Description
                                            </p>
                                        </div>
                                        <span
                                            className={`rounded-full border px-2 py-1 text-xs ${i == 0 ? "border-green-500/20 bg-green-500/10 text-green-400" : "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"}`}
                                        >
                                            {i == 0 ? "Live" : "Upcoming"}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex items-end justify-between">
                                        <div>
                                            <div className="text-xs text-neutral-500">
                                                Current bid
                                            </div>
                                            <div className="text-xl font-bold text-neutral-50">
                                                $ 2{i} 750
                                            </div>
                                        </div>
                                        <button className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
                                            Bid now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
