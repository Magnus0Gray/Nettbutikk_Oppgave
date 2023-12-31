import {generateProducts} from "../content/generateProduct"
import { Product, AddToCart } from "../shared/types"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"

export default function ProductsView({addToCart}:{addToCart:AddToCart}) {
	const [products, setProducts] = useState<Product[]>()

	useEffect(() => {
		const getProducts = async () => {
			const response = await fetch("/api/products", {
				method: "get"
			})
			const result = (await response.json()) as { data: Product[] }
			setProducts(result.data);
		}
		void getProducts();
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