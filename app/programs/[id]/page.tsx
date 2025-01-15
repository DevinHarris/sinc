import AuthAccess from "@/app/AuthAccess";
import ProgramPage from "./ProgramPage";

export default function Page() {

    return (
        <AuthAccess>
            <ProgramPage />
        </AuthAccess>
    )
}