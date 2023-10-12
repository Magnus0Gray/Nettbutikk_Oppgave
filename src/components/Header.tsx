"use client"
import Cart from "../components/Cart"
import Link from "next/link";

export default function Home() {

	function handleClick() {
		//cartRef.current?.useCart();

	}

	return (
		<header>
			<Link href="/"><h1>Store</h1></Link>
			<div className="cartContainer">
				<Cart/>
			</div>
			<button type="button" onClick={handleClick}>testbutton</button>
		</header>
	)

}