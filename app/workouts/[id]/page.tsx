import AuthAccess from "@/app/AuthAccess";
import WorkoutPage from "./Workout";

export default function Page() {
    return (
        <AuthAccess>
            <WorkoutPage />
        </AuthAccess>
    )
}