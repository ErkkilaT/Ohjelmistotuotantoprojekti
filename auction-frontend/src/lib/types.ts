type ApiResponse = {
    success: boolean;
    message: string;
};

type Item = {
    id: number;
    itemDescription: string;
    itemName: string;
    itemImage: string;
    itemPrice: number;
    bidIncrement: number;
    endAt: string;
};
