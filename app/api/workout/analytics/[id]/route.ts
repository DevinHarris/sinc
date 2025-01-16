import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/server";
import { workoutAnalytics } from "@/server/schema";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> })  {

    const workoutId = (await params).id;
    
    console.log(workoutId);

    return NextResponse.json({
        success: true,
        message: 'Workout analytics route!'
    })
}
