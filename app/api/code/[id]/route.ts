
import {  NextRequest,  NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/server";
import { accessCode } from "@/server/schema";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const code = (await params).id;
    const data = await db.select().from(accessCode).where((eq(accessCode.code, code)))
    
    if (data.length) {
        return NextResponse.json({
            message: "<span>Access code found.</span><p> Please continue to create your account.</p><p>Note: This code will be uniquely linked to your SINC account.</p>",
            codeExists: true,
            data
        })
    }

    return NextResponse.json({
        message: "Access code not found. Please try again.",
        codeExists: false
    })

   
}