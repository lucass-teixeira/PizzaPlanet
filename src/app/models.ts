
export interface APIResponse<T> {
    results: Array<T>
}

export interface Pizza {
    title: string
    price: number
    isGlutenFree: boolean
}

export interface Topping{
    id: number
    name: string
    price: number
}

export interface OrderTopping{
    id: number
    orderItemId: number
    toppingId: number
}

export interface User
{
    id: number
    name: string
    surname: string
    birthDate: Date
    userTypeId: number
}

export interface UserType{
    id: number
    title: string
}

