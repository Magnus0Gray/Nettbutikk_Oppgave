import ProductCard from "../components/ProductCard"
import { GeneratedProduct, Product } from "../shared/types";
import { fireEvent, render, screen } from "@testing-library/react"
import { generatedProduct, generateAProduct } from "../content/generateProduct";
import userEvent from '@testing-library/user-event';


describe("Rendering productcards", () => {
	const product = generateAProduct();
	it("Should render component with text", () => {
		render(<ProductCard product={product} />)
		expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
		expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
		expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
	})
	it("Should have functioning button", () => {
		const mockClick = vitest.fn();
		render(<ProductCard product={product} onClickHandler={mockClick} />);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
		expect(screen.getByText("Add to cart")).toBeInTheDocument();
		fireEvent.click(button);
		expect(mockClick).toHaveBeenCalledTimes(1);
	})
})