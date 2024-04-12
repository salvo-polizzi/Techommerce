import { Session } from 'express-session';

type cartData = {
    product_id: number,
    product_name: string,
    price: number,
    image: string,
    quantity: number,
    max_quantity: number
};


type Cart = {
    cart: cartData[];
}

declare module 'express-session' {
    interface Session {
        userId: string,
        cart: cartData[],
        cartTotal: number,
        listOrder: cartData[][],   
        listOrderPrice: number[],
        listOrderTotal: number,
        productsUnavailable: number[]   
    }
}