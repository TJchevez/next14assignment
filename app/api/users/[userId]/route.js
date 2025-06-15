import { NextResponse } from "next/server"

export function GET(request, context) {
    const userId = context.params.userId

    return NextResponse.json({
        userId
    })
}