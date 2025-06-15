import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        fruits: ["apple", "grapes", "oranges"]
    })
}