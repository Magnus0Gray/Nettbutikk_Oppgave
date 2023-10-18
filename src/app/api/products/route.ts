import { type NextRequest, NextResponse } from "next/server"
import { generateProducts } from "../../../content/generateProduct"
import { Product } from "../../../shared/types"


const products = generateProducts(10)

export function GET() {

    return NextResponse.json(
        { data: products },
        { status: 200 },
    )
}

//currently there is no shared states or database where data is stored for API, just returns so we can see the effect
export async function POST(request: NextRequest) {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const data = await request.json().then((result) => {
        const product: Product = Object.assign({} as Product, result)
        console.log(product);
        products.push(product);
    });

    return NextResponse.json({ data }, { status: 201 })
}