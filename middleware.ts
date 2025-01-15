import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest, repsonse: NextResponse) {

    // const session = await auth();
    const { pathname, origin } = request.nextUrl;
    let cookie = request.cookies.get('accessCode');
    if (pathname === '/api/auth/signin' && !cookie) {
        
       return NextResponse.redirect(origin);
    } else {
        console.log(cookie); 
    }

    return NextResponse.next();
}

