/* eslint-disable react/display-name */
"use client"

import { useCartContext } from "../features/cart/CartContext";
import { type Product, getFullLabel } from "../shared/types"
import { useEffect, useState } from "react";

export type CartProduct = {
    product: Product,
    count: number
}

export const useCart = () => {
    const cartInit: CartProduct[] = [];
    const [cartContent, setCartContent] = useState([...cartInit]);

    //console.log("triggered useCart")

    //alternatively useReducer could be used instead of copying arrays
    const addItem = (product: Product) => {
        const index = findItem(product);

        // product not found in cart
        if (index == -1) {
            const newProduct: CartProduct = { product, count: 1 };
            setCartContent((prev) => [...prev, newProduct]);
        }
        // copy list, modify, then set, to increment count by 1 if product already exists
        else {
            const incList: CartProduct[] = cartContent;
            //index should theoretically always match previous findIndex since incList is a direct copy, but some additional control might be in order for a real application, particularily with async operations
            incList[index].count++;
            setCartContent(() => incList);
            console.log("count added")
        }

    }

    const subtractItem = (product: Product) => {
        const index = findItem(product);

        //return index -1 should not be possible, as the functionality to subtract should only be present to the user when items are 1 or more.
        if (index != -1) {
            const subList: CartProduct[] = cartContent;
            if (subList[index].count >= 2)
                subList[index].count--;
            else if (subList[index].count <= 1) //technically remove on 1 (as count would become 0) would be correct, but checking for lower numbers could help catching unforseen events where the count isn't what we expect and remove invalid content from the cart
                subList.splice(index, 1); //mutating the array directly is typically a no-no, but sublist is already a copy we are modifying, not the original array.

            setCartContent(subList);
        }
        else
            console.log("Error: Tried to subtract invalid item")
    }

    //Delete item from cart, regardless of count
    const removeItem = (product: Product) => {
        const index = findItem(product);
        const delList = cartContent;
        delList.splice(index, 1);
        setCartContent(delList);
    }

    const findItem = (product: Product) => {
        const index: number = cartContent.findIndex(item => item.product.id === product.id);
        return index;
    }

    return { cartContent, addItem, subtractItem, removeItem }
}


export default function ShoppingCart() {
    const [cartActive, setCartActive] = useState(false)
    const cartHandler = () => {
        setCartActive(!cartActive)

        //attempt to make animated cart
        /*
        const cart = document.getElementById("cart");
        console.log(cart?.offsetHeight)
        if (cart != null) {
            if (cartActive)
                cart.style.maxHeight = "0";
            else
                cart.style.maxHeight = cart.offsetHeight.toString();
        }*/
    }

    //const cartContent = useCart().cartContent;

    const { getProducts, addProduct, subProduct, removeProduct } = useCartContext();
    const cartContent = getProducts;


    let total = 0;
    function addToTotal(value: number){
        total += value;
        return ""
    }

    /*useEffect(() => {
        console.log("useEffect triggered")
    }, [total, getProducts])*/

    return (
        <div id="cart">
            <button onClick={cartHandler}><h3>Cart</h3></button>
            <section className={cartActive ? "cartActive" : "cartDisabled"}>
                <ul>
                    {cartContent.length > 0 
                        ? (cartContent.map((item) => (
                            <li className="border-solid border-2 my-2 px-1 border-gray-100 rounded-sm" key={item.product.id}>
                                <div className="flex flex-nowrap justify-between">
                                    <button className=" text-xs text-center align-middle text-white bg-red-600 rounded-full w-4 h-4 font-extrabold my-auto clear-both">X</button>
                                    <span className="title">{item.product.label.name}</span>
                                    <span className="my-auto"><button className="text-orange-600 font-extrabold" >-</button><span className="m-0.5 bg-gray-200 rounded-sm px-1">{item.count}</span><button className="text-green-600 font-extrabold">+</button></span>
                                </div>
                                <span className="price">{item.product.price},-</span>
                                {addToTotal(item.product.price)}
                            </li>
                        )))
                        : (<li>
                            Empty
                          </li>)
                    }
                </ul>
                <p>
                    Total <span id="carttotal">{total},-</span>
                </p>
            </section>
        </div>
    )

}