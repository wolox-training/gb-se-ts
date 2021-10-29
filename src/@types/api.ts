export interface LoginResponse{
    user_id: number;
}

export interface PurchasedBooksResponse{
    album: {
        user_id: number;
        id: number;
        title: string;
    },
    user_id: number;
    created_at: string;
}

export interface AlbumsResponse{
    user_id: number;
    id: number;
    title: string;
}