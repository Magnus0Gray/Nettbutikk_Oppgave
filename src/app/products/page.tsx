/* eslint-disable no-console */
"use client"

import Cart from '../../components/Cart';
import ProductsView from '../../components/ProductsView';
import '../../css/main.css';
//import { useState } from "react"
import { type Product, type AddToCart } from '../../shared/types';


export default function Home() {

	const addToCart: AddToCart
	= (product: Product) => {
		console.log("triggered: ")
		console.log(product)
	}


	return (
		<>
			<header>
				<h1>Store</h1>
				<div className="cartContainer">
					<Cart/>
				</div>
			</header>

			<main>
				<ProductsView addToCart={addToCart} />
			</main>
		</>
	)

}
