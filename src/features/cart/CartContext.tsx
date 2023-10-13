"use client"

import { createContext, useContext } from "react";
import type { ReactNode } from "react" 
import { type Product } from "../../shared/types";
import { type CartProduct, useCart } from "../../components/Cart";

//context
type CartContextType = {
    //currentProduct: Product
    getProducts: CartProduct[]
    addProduct: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = (props: { children: ReactNode, currentProduct?: Product }) => {
    const { children, currentProduct } = props;

    const { addItem, subtractItem, removeItem, cartContent } = useCart();

    const value = {
        currentProduct,
        getProducts: cartContent,
        addProduct: addItem,
        subProduct: subtractItem,
        removeProduct: removeItem

    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
    const context = useContext(CartContext);

    if (!context)
        throw new Error("CartContext not valid")

    return context
}