export interface Meta {
    current_page: number;
    last_page: number;
    total: number;
}

export interface Links {
    first: string;
    last: string;
    next: string;
    prev: string;
}

export interface Modul {
    id: number;
    title: string;
    body: string;
}

export interface ModulState {
    modul: Modul[];
    isLoading: boolean;
    error: string | null;
    meta: Meta;
}