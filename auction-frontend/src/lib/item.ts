async function addItem(
    itemName: string,
    itemImage: string,
    itemDescription: string,
    itemPrice: number,
    bidIncrement: number
): Promise<ApiResponse> {
    const token = localStorage.getItem("token");
    if (!token) return { success: false, message: "Invalid token" };

    const body = {
        auth_token: token,
        item_name: itemName,
        item_image: itemImage,
        item_description: itemDescription,
        item_price: itemPrice.toString(),
        bid_increment: bidIncrement.toString(),
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/item`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(body),
    });

    const text = await response.text();
    console.log(text);

    return response.status === 201
        ? { success: true, message: "Item successfully added" }
        : { success: false, message: text };
}

async function getAllItems() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/item`);
    return await response.json();
}

export { addItem, getAllItems };
