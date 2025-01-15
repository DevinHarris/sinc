import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers"
import { auth } from "@/auth";

export async function middleware(request: NextRequest, repsonse: NextResponse) {

    // const session = await auth();
    const { pathname, origin } = request.nextUrl;
    let cookieStore = await cookies();
    const cookie = cookieStore.get("accessCode");

    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/code/${cookie?.value}`);
    // const accessCodeRes = await res.json();
    
    

    if (pathname === '/api/auth/signin' && !cookie) {
        
        return NextResponse.redirect(origin);
    } else {
        console.log(cookie); 
    }

    return NextResponse.next();
}

