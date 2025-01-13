import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/server";
import { accessCode } from "@/server/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
    const res = await request.json();
    const cookieStore = await cookies();

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

            cookieStore.set('accessCode', code, { secure: true });
        
        if (data.rowCount === 0) {
            return NextResponse.json({
                success: false,
                message: "Access code was not activated."
            })
        }

        return NextResponse.json({
            success: true,
            activatedAt,
            expiresAt,
            data
        })
   
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: "There was an error."
        })
    }

}