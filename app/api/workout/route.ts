import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/server";
import { userWorkout, users } from "@/server/schema";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {

    const session =  await auth();
    console.log('session', session)
    
    const res = await request.json();
    const findUserId = await db.query.users.findFirst({
        where: eq(users.email, session?.user?.email!)
    })

    const id = findUserId?.id;
    console.log('userid', id);
    console.log('response data', res)
    // console.log('response', res.workout);
    
    const insertIntoDb = await db.insert(userWorkout).values({
        workoutName: res.workoutName,
        workoutId: res.sourceId,
        userId: id
    });

    // console.log(insertIntoDb)
    // const dbRes = await db.insert(userWorkout).values(res);

    // if (!dbRes) {
            
    //     return NextResponse.json({
    //         success: false,
    //         message: "workout not saved"
    //     })
    // }

    return NextResponse.json({
        success: true,
        message: "workout saved"
    })

}