"use client"
import Cart from "../components/Cart"
import Link from "next/link";

export default function Home() {

	return (
		<header >
			<Link href="/"><h1>Store</h1></Link>

			<nav>
				<Link href="/products" >Products</Link>
				<Link href="/history" >Purchase history</Link>
			</nav>
			<div className="cartContainer">
				<Cart/>
			</div>
		</header>
	)

}