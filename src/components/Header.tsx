"use client"
import { useRef } from "react"
import Cart from "../components/Cart"
import Link from "next/link";
import { cartHandle } from "../components/Cart"

export default function Home() {
	const cartRef = useRef(null);

	function handleClick() {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		cartRef.current?.editCart();

	}

	return (
		<header>
			<Link href="/"><h1>Store</h1></Link>
			<div className="cartContainer">
				<Cart ref={cartRef} />
			</div>
			<button type="button" onClick={handleClick}>testbutton</button>
		</header>
	)

}