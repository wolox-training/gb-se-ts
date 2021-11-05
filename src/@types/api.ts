export interface LoginResponse{
    user_id: number;
}

export interface PurchasedAlbumsResponse{
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

export interface RegisterResponse {
    user_id: number
}