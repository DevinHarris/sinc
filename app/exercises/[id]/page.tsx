import AuthAccess from "@/app/AuthAccess";
import ExercisePage from "./ExercisesPage";

export default function Page() {
    return (
        <AuthAccess>
            <ExercisePage />
        </AuthAccess>
    )
}