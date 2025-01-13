import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest, repsonse: NextResponse) {

    // const session = await auth();

    const routeName = request.nextUrl.pathname;

   console.log(routeName)

    return NextResponse.next();
}

