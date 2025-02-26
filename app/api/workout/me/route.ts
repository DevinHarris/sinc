import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/server";
import { userWorkout, users } from "@/server/schema";
import { auth } from "@/auth";


export async function GET(request: NextRequest , { params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    const workoutId = (await params).id;

    const findUserId = await db.query.users.findFirst({
        where: eq(users.email, session?.user?.email!)
    })

    const id = findUserId?.id;
    const queryId = `${id}${workoutId}`

    const data = await db.select().from(userWorkout).where(eq(userWorkout.userWorkoutId, queryId));

    return NextResponse.json({
        success: true,
        data
    })

}

export async function POST(request: NextRequest) {
    const session = await auth();
    const bodyRes = await request.json();

    const findUserId = await db.query.users.findFirst({
        where: eq(users.email, session?.user?.email!)
    })

    const id = findUserId?.id;
    const queryId = `${id}${bodyRes.sourceId}`

    const dbReq = await db.update(userWorkout)
        .set({
            workoutNotes: bodyRes.workoutNotes
        }).where(eq(userWorkout.userWorkoutId, queryId))
        .returning({
            userWorkout
        });

    console.log(dbReq);

    return NextResponse.json({
        success: true,
        message: "saved",
        data: dbReq
    })

}