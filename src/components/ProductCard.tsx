import { type Product, type AddToCart, getFullLabel } from "../shared/types"

type ProductCardProps = {
	product: Product,
	onClickHandler?: AddToCart
}
export default function ProductCard(props: ProductCardProps) {
	//, addToCart: { addToCart: AddToCart }
	//add button with onClick, use id to add to cart if not already present, add to count if present

	/*const handleOnClick = () => {
		console.log(addToCart)
		//addToCart(props);
	}*/

	//console.log(props.onClickHandler)

	const { price, category, currency } = props.product;
	return (
		<article className="product-card">
			<h3>{category}</h3>
			<section className="product-info">
				<h2>{getFullLabel(props.product)}</h2>
				<h4 className="price">Price: <br/>
					{price}{currency}</h4>
				{props.onClickHandler
					? <button onClick={() => props.onClickHandler?.(props.product)}>Add to cart</button>
					: <div className="text-red-600">Sold out</div>
				}
			</section>
		</article>
	)
}