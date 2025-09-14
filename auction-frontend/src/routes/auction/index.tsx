import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auction/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="grid flex-1 place-items-center">
            <div className="flex h-full max-h-[60%] min-h-72 gap-4 rounded-lg border-1 border-zinc-200 p-4 *:min-w-72 dark:border-zinc-700">
                <div className="flex flex-col">
                    <img
                        className="h-48 w-full max-w-72 rounded-xl object-cover"
                        src="https://placehold.co/550x300"
                    ></img>
                    <h1 className="text-2xl font-medium">Item name</h1>
                    <h2>Item description</h2>
                    <div className="mt-auto flex flex-col gap-2">
                        <div>
                            <div className="flex justify-between text-xl">
                                <div>Bid increments</div>
                                <div>25.00$</div>
                            </div>
                            <div className="flex justify-between text-xl">
                                <div>Current bid</div>
                                <div>75.00$</div>
                            </div>
                        </div>
                        <Button className="w-full">Bid 100.00$</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-medium">Live bids</h2>
                    <div className="grid flex-1 place-items-center rounded-md border-1 border-zinc-200 dark:border-zinc-700">
                        <p className="text-xl">No bids yet</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
