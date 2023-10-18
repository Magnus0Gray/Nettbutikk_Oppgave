/* eslint-disable no-console */
"use client"

import { useEffect, useState } from 'react';
import '../../css/main.css';
import { type Product, getFullLabel } from '../../shared/types';
import { generateAProduct } from '../../content/generateProduct';


export default function Home() {

	const [products, setProducts] = useState<Product[]>()


	const getProducts = async () => {
		const response = await fetch("/api/products", {
			method: "get"
		})
		const result = (await response.json()) as { data: Product[] }
		//console.log(result.data)
		//console.log(result)
		setProducts(result.data);
	}

	//generate 1 product and add using fetch/post
	const addToHistory = async () => {
		const data = generateAProduct();
		const response = await fetch("/api/products", {
			method: "post",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});
		//console.log(response.json());
		void getProducts();
	}

	useEffect(() => {
		void getProducts();
	}, []);

	useEffect(() => {
		console.log("List reloaded")
	}, [products]);

	//todo map list of product history products to show result 
	return (
		<div className="historyContainer">
			<span>Purchase history: </span>
			<div className="productList">{
				products?.map((product) => (
					<span key={product.id}>{getFullLabel(product)}</span>
				))}
			</div>
			<span>		Add a product to purchase history:
				<button className="bg-stone-300 rounded-xl p-1 border-solid border-2 border-stone-500 font-bold m-2" onClick={addToHistory}>Add</button>
			</span>
		</div>
	)
}
