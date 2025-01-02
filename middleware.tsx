import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, repsonse: NextResponse) {

    console.log(request.url);

    return NextResponse.redirect(new URL("/join", request.url))
}

export const config = {
    matcher: "/programs/day"
}