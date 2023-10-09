import { type Product, type AddToCart, getFullLabel } from "../shared/types"

//props are currently identical to product type itself and can therefore be reused, but should probably be seperate for a real application
type ProductCardProps = Product

export default function ProductCard(props: ProductCardProps, addToCart: { addToCart: AddToCart }) {

	//add button with onClick, use id to add to cart if not already present, add to count if present

	const handleOnClick = () => {
		console.log(addToCart)
		//addToCart(props);
	}

	const {price, category, currency } = props
	return (
		<article className="product-card">
			<h3>{category}</h3>
			<section className="product-info">
				<h2>{getFullLabel(props)}</h2>
				<h4 className="price">Price: <br/>
					{price}{currency}</h4>
				<button onClick={handleOnClick}>Add to cart</button>
			</section>
		</article>
	)
}