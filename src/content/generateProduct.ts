import type {Product, GeneratedProduct, ProductLabel} from "../shared/types"

const prefixes: string[] = [
	"Harsh",
	"Glamorous",
	"Blue",
	"Gilded",
	"Melted",
	"Opulent",
	"Confused",
	"Self immolating",
	"Infinite",
	"Slow",
	"Crumpled",
	"Slightly damp",
	"Oddly hostile",
	"Far too friendly",
	"Spanish",
	"Single",
	"Caffeinated",
	"Strangely familiar",
	"Genuine",
	"Public",
	"Exposed",
	"Deconstructed",
	"Far too moist",
	"Most heretical",
	"Concerned"
]

const productNames: string[] = [
	"Horse carriage",
	"Hedgehog",
	"Pan flute",
	"Bicycle",
	"Speaker",
	"Softdrink",
	"Microphone",
	"Mushroom",
	"Nachos",
	"Cheese",
	"Moustache",
	"Stranger",
	"Book",
	"Didgeridoo",
	"Witness",
	"Comb-over",
	"Speaker",
	"Handbook",
	"Guide",
	"Pillow",
	"VHS Tape",
	"Mallet"
]

const suffixes: string[] = [
	" (As new)",
	" (Slightly used)",
	" of great concern",
	", the good kind",
	" of wisdom",
	" that fits in a lunchbox",
	", freezedried",
	" with self esteem issues",
	" with added carbohydrates",
	", definitely not cursed",
	" (cotton wash only)",
	" of hospitality",
	", mostly intact",
	" (manual missing)",
	" of unknown origin",
	" (Perfect in a casserole!)",
	" with secret storage compartment",
	", only a little bit moldy"
]

const generateLabel = () => {
	const label = {} as ProductLabel;
	label.prefix = getRandomItem(prefixes) + " ";
	label.name = getRandomItem(productNames);
	label.suffix = getRandomItem(suffixes);
	return label;
}

const categories: string[] = [
	"Inanimate Objects",
	"Non Euclidean",
	"Existential horror",
	"Cute things",
	"Consumable",
	"Inconcievable",

]

const getRandomCategory = () => {
	return getRandomItem(categories)
}

const getRandomCurrency = () => {
	const currencies: string[] = [
		"Kr",
		"Gilmore Girls season 5 disc 2",
		"Pieces of string",
		"Timtams",
		"Dollarydoos",
		"Freedombucks",
		"Loonies",
		"Bars of gold pressed latinum"
	]
	return " " + getRandomItem(currencies)
}

const getRandomItem = <T>(items: T[]) => {
	return items[Math.floor(Math.random() * items.length)]
}

const getRandomPrice = () => {
	return Math.trunc((Math.random() * 100 * Math.random() * 50)) + 9; //minimum 9

}

const getRandomId = () => {
	return Math.random().toString(36).slice(2)
}

export const generatedProduct: GeneratedProduct = {
	id: () => getRandomId(),
	label: () => generateLabel(),
	price: () => getRandomPrice(),
	currency: () => getRandomCurrency(),
	category: () => getRandomCategory()
}

export function generateAProduct(): Product {
	const product = {
		id: generatedProduct.id(),
		label: generatedProduct.label(),
		price: generatedProduct.price(),
		currency: generatedProduct.currency(),
		category: generatedProduct.category(),
	}
	return product;
}

/*type GenerateProducts = {
	existingProducts?: Map<string, Product>
	product: Product
}*/

export const generateProducts = (count: number) => {
	const products: Product[] = [];

	for (let i = 0; i < count; i++)
		products.push(generateAProduct());

	//console.log(products);
	return products;
}
