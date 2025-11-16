import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { addItem } from "@/lib/item";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function AddItemForm() {
    const { t } = useTranslation();
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
            toast.success(t("additemform.toast.success"));
        } else {
            toast.error(t("additemform.toast.error"));
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
        <div className="grid grid-cols-2 gap-4">
            <form
                className="flex flex-col gap-1 *:max-w-96"
                onSubmit={handleAddItem}
            >
                <div className="text-xl font-bold">
                    {t("additemform.item_title")}
                </div>
                <Input
                    placeholder={t("additemform.item_title")}
                    onChange={(e) => setItemTitle(e.target.value)}
                    required
                ></Input>
                <div className="text-xl font-bold">
                    {t("additemform.item_image")}
                </div>
                <Input
                    id="item-image"
                    type="file"
                    required
                    onChange={handleItemChange}
                ></Input>
                <div className="text-xl font-bold">
                    {t("additemform.item_description")}
                </div>
                <Textarea
                    placeholder={t("additemform.item_desc_placeholder")}
                    onChange={(e) => setItemDesc(e.target.value)}
                    required
                ></Textarea>
                <div className="text-xl font-bold">
                    {t("additemform.starting_price")}
                </div>
                <Input
                    type="number"
                    step={0.01}
                    defaultValue={1}
                    onChange={(e) => setStartingPrice(+e.target.value)}
                    required
                ></Input>
                <div className="text-xl font-bold">
                    {t("additemform.bid_increment")}
                </div>
                <Input
                    type="number"
                    step={0.01}
                    defaultValue={1}
                    onChange={(e) => setBidIncrement(+e.target.value)}
                    required
                ></Input>
                <Button className="mt-2 cursor-pointer">
                    {t("additemform.add_item")}
                </Button>
            </form>
            <img
                className="h-full w-full rounded-md object-cover"
                src={itemImageURL}
                alt="Item"
            />
        </div>
    );
}
