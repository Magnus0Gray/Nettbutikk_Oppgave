import { type NextRequest, NextResponse } from "next/server";
import { type Product } from "../../../../shared/types";


//not implemented, but the imagined use would be to show a simplified product card popup in cart, to fetch a specific product for its own page or adding to user's purchase history

type Params = {
    id: string;
};

//data is currently not stored anywhere, so requests will not be consistent across API
const dummyProducts: Product[] = [
    { id: "A1", label: { prefix: "Dummy", name: "product", suffix: " A1" }, category: "Test", price: 199, currency: "NOK" },
    { id: "A2", label: { prefix: "Dummy", name: "product", suffix: " A2" }, category: "Test", price: 199, currency: "NOK" }
]
const data = dummyProducts;

export function GET(request: NextRequest, params: Params) {
    const product = data.find((item) => item.id === params.id)

    return NextResponse.json(
        { data: product },
        { status: 200 },
    )
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    //console.log(data)
    return NextResponse.json({ data }, { status: 200 })
}