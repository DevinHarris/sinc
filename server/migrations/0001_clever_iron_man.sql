CREATE TABLE "userWorkout" (
	"workoutId" text NOT NULL,
	"userId" text,
	"workoutName" text
);
--> statement-breakpoint
ALTER TABLE "userWorkout" ADD CONSTRAINT "userWorkout_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;