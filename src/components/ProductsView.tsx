import {generateProducts} from "../content/generateProduct"
import { Product, AddToCart } from "../shared/types"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"

export default function ProductsView( addToCart: AddToCart) {
	const [products, setProducts] = useState<Product[]>()

	useEffect(() => {
		setProducts(generateProducts(10));
	}, []);

	/*const handleAddToCart = (product: Product) => {
		addToCart(product)
	}*/


	return (
		<section className="products-view">
			{
				products?.map((product) => (
					<ProductCard key={product.id} id={product.id} label={product.label} price={product.price} currency={product.currency} category={product.category} addToCart={addToCart} />
			))}
		</section>

	)
}