import { useCartContext } from "../features/cart/CartContext";
import { type Product, type AddToCart, getFullLabel } from "../shared/types"

type ProductCardProps = {
	product: Product,
	onClickHandler?: AddToCart
}
export default function ProductCard(props: ProductCardProps) {
	//, addToCart: { addToCart: AddToCart }

	const { addProduct } = useCartContext();


	function handleClick() {
		//console.log("buttonPressed")
		addProduct(props.product)
		//console.log(getProducts)
	}


	const { price, category, currency } = props.product;
	return (
		<article className="product-card">
			<h3>{category}</h3>
			<section className="product-info">
				<h2>{getFullLabel(props.product)}</h2>
				<h4 className="price">Price: <br/>
					{price}{currency}</h4>

				<button onClick={handleClick}>Add to cart</button>
				{/*
				{props.onClickHandler
					? <button onClick={() => props.onClickHandler?.(props.product)}>Add to cart</button>
					: <div className="text-red-600">Sold out</div>
				}*/}
			</section>
		</article>
	)
}