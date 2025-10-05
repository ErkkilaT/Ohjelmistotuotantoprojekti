import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { addItem } from "@/lib/item";
import { toast } from "sonner";

export default function AddItemForm() {
    const [itemImageURL, setItemImageURL] = useState(
        "https://placehold.co/600x400"
    );

    const [itemTitle, setItemTitle] = useState("");
    const [itemDesc, setItemDesc] = useState("");
    const [itemImage, setItemImage] = useState("");
    const [startingPrice, setStartingPrice] = useState(1);
    const [bidIncrement, setBidIncrement] = useState(1);

    const handleAddItem = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await addItem(
            itemTitle,
            itemImage,
            itemDesc,
            startingPrice,
            bidIncrement
        );
        if (response.success) {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };

    const handleItemChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const firstFile = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(firstFile);
        fileReader.onload = () => {
            setItemImageURL(fileReader.result as string);
            setItemImage(fileReader.result as string);
        };
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <form
                    className="flex flex-col gap-1 *:max-w-96"
                    onSubmit={handleAddItem}
                >
                    <div className="text-xl font-bold">Item title</div>
                    <Input
                        placeholder="Item title"
                        onChange={(e) => setItemTitle(e.target.value)}
                        required
                    ></Input>
                    <div className="text-xl font-bold">Item Image</div>
                    <Input
                        type="file"
                        required
                        onChange={handleItemChange}
                    ></Input>
                    <div className="text-xl font-bold">Item Description</div>
                    <Textarea
                        placeholder="Add your description here"
                        onChange={(e) => setItemDesc(e.target.value)}
                        required
                    ></Textarea>
                    <div className="text-xl font-bold">Starting Price</div>
                    <Input
                        type="number"
                        step={0.01}
                        defaultValue={1}
                        onChange={(e) => setStartingPrice(+e.target.value)}
                        required
                    ></Input>
                    <div className="text-xl font-bold">Bid increment</div>
                    <Input
                        type="number"
                        step={0.01}
                        defaultValue={1}
                        onChange={(e) => setBidIncrement(+e.target.value)}
                        required
                    ></Input>
                    <Button className="mt-2 cursor-pointer">Add item</Button>
                </form>
                <img
                    className="h-full w-full rounded-md object-cover"
                    src={itemImageURL}
                />
            </div>
        </>
    );
}
