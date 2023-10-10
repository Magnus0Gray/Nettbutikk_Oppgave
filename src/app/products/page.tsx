/* eslint-disable no-console */
"use client"

import Cart from '../../components/Cart';
import ProductsView from '../../components/ProductsView';
import '../../css/main.css';
import { useRef } from "react"
import { type Product, type AddToCart } from '../../shared/types';


export default function Home() {
	//alternative to custom hook with context
	//const cartRef = useRef();

	const addToCart: AddToCart = function(product: Product){
		console.log("triggered: ")
		console.log(product)
	}


	return (
				<ProductsView addToCart={addToCart} />
	)

}
