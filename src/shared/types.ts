export type ProductLabel = {
	prefix: string
	name: string
	suffix: string
}

export type Product = {
	id: string
	label: ProductLabel
	category: string
	price: number
	currency: string
}

//product should probably be class instead of type to allow inherent functionality, or perhaps add an interface
export function getFullLabel(product: Product): string {
	return product.label.prefix + product.label.name + product.label.suffix;
}

export type GeneratedProduct = {
	id: () => string
	label: () => ProductLabel
	category: () => string
	price: () => number
	currency: () => string
}

export type AddToCart = (product: Product) => void;