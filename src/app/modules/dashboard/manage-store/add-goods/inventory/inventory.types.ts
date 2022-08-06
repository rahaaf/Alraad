export interface InventoryProduct
{
    id: string;
    idstor: string;
    name: string;
    types?: string[];
    hieght?: number | null;
    width?: number | null;
    stock: number;
    cost: number;
    profitratio: number;
    price: number;
    boxweight: number;
    boxsize: number;
    images: string;
    active: boolean;
}

export interface InventoryPagination
{
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}


export interface InventoryTag
{
    id?: string;
    title?: string;
}
