import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server";
import { accessCode } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
    const res = await request.json();

    const code = res.code;

    try {
        const activatedAt = new Date();
        const expirationPeriod = 900 * 24 * 60 * 60 * 100; // 7 days in milliseconds
        const expiresAt = new Date(activatedAt.getTime() + expirationPeriod);

        const data = await db
            .update(accessCode)
            .set({
                active: true,
                activated: activatedAt,
                expires: expiresAt
            }).where(eq(accessCode.code, code))
        
        return NextResponse.json({
            success: true,
            activatedAt,
            expiresAt,
            data
        })
   
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: "There was an error"
        })
    }

}