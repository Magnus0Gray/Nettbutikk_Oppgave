import { generateProducts } from "../content/generateProduct"
import { Product } from "../shared/types";

describe("Validate products", () => {
	it("should generate correct count of products", () => {
		const count = 10;
		const products: Product[] = generateProducts(count);
		expect(products.length).toBe(count);
	})
	it("all items should have prefix, label and suffix", () => {
		const stringsToFind = 3;
		const product: Product = generateProducts(1)[0];
		let stringsFound = 0;

		for (const value of Object.values(product.label)) {
			if (value)
				stringsFound++;
		}
		expect(stringsFound).toBe(stringsToFind);
	})
})