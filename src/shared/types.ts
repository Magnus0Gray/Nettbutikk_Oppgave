export type Product = {
	id: string
	label: string
	category: string
	price: number
	currency: string
}

export type GeneratedProduct = {
	id: () => string
	label: () => string
	category: () => string
	price: () => number
	currency: () => string
}

export type AddToCart = (product: Product) => void;