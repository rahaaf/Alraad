export interface InventoryProduct
{
    id: string;
    governorate?: string;
    contact?: string;
    name: string;
    address: string;
    coordinates: number;
    totalspace: number;
    width: number;
    height: number;
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

export interface InventoryGovernorate
{
    id: string;
    parentId: string;
    name: string;
}

export interface InventoryCoordinates
{
    id: string;
    height: string;
    width: string;
}

