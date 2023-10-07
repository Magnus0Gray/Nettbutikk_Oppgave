"use client"

import Cart from '../../components/Cart';
import ProductsView from '../../components/ProductsView';
import '../../css/main.css';
import { useState } from "react"
import { Product, AddToCart } from '../../shared/types';


export default function Home() {

	const addToCart: AddToCart
	= () => {
		console.log("triggered")
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
