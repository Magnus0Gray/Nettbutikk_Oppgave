import { NextResponse } from "next/server"
import { generateProducts } from "../../../content/generateProduct"

export function GET() {
    const products = generateProducts(10)

    return NextResponse.json(
        { data: products },
        { status: 200 },
    )
}
