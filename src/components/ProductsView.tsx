import {generateProducts} from "../content/generateProduct"
import { Product, AddToCart } from "../shared/types"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"

export default function ProductsView({addToCart}:{addToCart:AddToCart}) {
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
					<ProductCard key={product.id} product={product} onClickHandler={addToCart} />
			))}
		</section>

	)
}