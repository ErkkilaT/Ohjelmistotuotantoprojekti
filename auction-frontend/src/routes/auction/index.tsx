import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/auction/")({
    component: RouteComponent,
});

type BidEntry = {
    id: number;
    username: string;
    price: number;
};

function RouteComponent() {
    const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
    const [activeItem, setActiveItem] = useState<Item | null>(null);
    const [currentPrice, setCurrentPrice] = useState<number | null>(null);
    const [currentBids, setCurrentBids] = useState<BidEntry[]>([]);
    const [bidExpiry, setBidExpiry] = useState(0);
    const [countdownValue, setCountdownValue] = useState(0);
    const [myid] = useState(localStorage.getItem("user_id"));

    useEffect(() => {
        if (webSocket) return;
        setWebSocket(new WebSocket(import.meta.env.VITE_WS_URL));
    }, []);

    useEffect(() => {
        if (!webSocket) return;

        const messageCallbackFunction = (m: MessageEvent<any>) => {
            const msg = JSON.parse(m.data);
            switch (msg.subject) {
                case "current_item":
                    setActiveItem(msg.payload);
                    setCurrentPrice(msg.payload.itemPrice);
                    setBidExpiry(new Date(msg.payload.endAt).getTime());
                    break;
                case "new_auction":
                    setActiveItem(msg.payload);
                    setCurrentPrice(msg.payload.itemPrice);
                    setBidExpiry(new Date(msg.payload.endAt).getTime());
                    setCurrentBids([]);
                    break;
                case "price_update":
                    const bidEntry = {
                        id: msg.payload.bidderId,
                        username: msg.payload.bidder,
                        price: +msg.payload.price,
                    };
                    setCurrentPrice(bidEntry.price);
                    setCurrentBids((p) => [bidEntry, ...p]);
                    break;
                case "timer_update":
                    setBidExpiry(new Date(msg.payload).getTime());
                    break;
                case "auction_end":
                    setActiveItem(null);
                    const userid = localStorage.getItem("user_id");
                    if (!userid || !msg.payload.winner) break;
                    if (msg.payload.winner.id == userid)
                        toast.success(`You've won ${msg.payload.itemName}`);
                    break;
                default:
                    console.log("Unknown WebSocket message: ", msg);
            }
        };

        webSocket.addEventListener("message", messageCallbackFunction);

        return () => {
            webSocket.removeEventListener("message", messageCallbackFunction);
        };
    }, [webSocket]);

    useEffect(() => {
        const myId = localStorage.getItem("user_id");
        if (myId && currentBids.length >= 2 && currentBids[1].id === +myId)
            toast.error("You've been outbid!");
    }, [currentBids]);

    useEffect(() => {
        if (!bidExpiry) return;

        const interval = setInterval(() => {
            const diff = bidExpiry - Date.now();
            setCountdownValue(Math.max(diff, 0));
        }, 100);

        return () => clearInterval(interval);
    }, [bidExpiry]);

    const handleBid = () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const body = {
            subject: "bid",
            payload: {
                authtoken: token,
                price: -1,
            },
        };
        webSocket?.send(JSON.stringify(body));
    };

    return (
        <div className="grid flex-1 place-items-center">
            <div className="flex h-full max-h-[60%] min-h-72 gap-4 rounded-lg border-1 border-zinc-200 p-4 *:min-w-72 dark:border-zinc-700">
                {activeItem && currentPrice ? (
                    <>
                        <div className="flex flex-col">
                            <img
                                className="h-48 w-full max-w-72 rounded-xl object-cover"
                                src="https://placehold.co/550x300"
                            ></img>
                            <h1 className="text-2xl font-medium">
                                {activeItem.itemName}
                            </h1>
                            <h2>{activeItem.itemDescription}</h2>
                            <div className="mt-auto flex flex-col gap-2">
                                <div>
                                    <div className="flex justify-between text-xl">
                                        <div>Bid increments</div>
                                        <div>
                                            {activeItem.bidIncrement.toFixed(2)}
                                            $
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-xl">
                                        <div>Current bid</div>
                                        <div>{currentPrice.toFixed(2)}$</div>
                                    </div>
                                </div>
                                <Button
                                    variant={"default"}
                                    className="w-full"
                                    onClick={handleBid}
                                    disabled={
                                        currentBids.length !== 0 &&
                                        myid != null &&
                                        currentBids[0].id === +myid
                                    }
                                >
                                    Bid{" "}
                                    {(
                                        currentPrice + activeItem.bidIncrement
                                    ).toFixed(2)}
                                    $
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-medium">
                                    Live bids
                                </h2>
                                <div className="text-2xl font-medium">
                                    {(countdownValue / 1000).toFixed(1)}
                                </div>
                            </div>
                            <div className="relative flex flex-1 flex-col overflow-y-auto rounded-md border-1 border-zinc-200 dark:border-zinc-700">
                                <div className="absolute inset-0">
                                    {currentBids.length === 0 ? (
                                        <p className="text-xl">No bids yet</p>
                                    ) : (
                                        currentBids.map(
                                            ({ username, price }, i) => {
                                                return (
                                                    <div
                                                        className="flex w-full justify-between border p-2"
                                                        key={i}
                                                    >
                                                        <div>{username}</div>
                                                        <div>
                                                            {price.toFixed(2)}$
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )
                                    )}
                                </div>
                            </div>
                        </div>{" "}
                    </>
                ) : (
                    <div className="grid h-full w-full place-items-center text-2xl font-semibold">
                        Waiting for items...
                    </div>
                )}
            </div>
        </div>
    );
}
