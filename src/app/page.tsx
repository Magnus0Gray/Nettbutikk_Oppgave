"use client"

import Link from 'next/link';
import ProductsView from '../components/ProductsView';
import '../css/main.css';
import Cart from '../components/Cart';

export default function Home() {
	return (
		<Link className="bg-stone-300 rounded-xl p-5 border-solid border-2 border-stone-500 font-extrabold mx-auto" href="/products" >Products</Link>
	)

}
