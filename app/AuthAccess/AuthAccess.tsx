import Link from "next/link"
import { auth } from '@/auth'
import { User2Icon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AuthAccessProps } from "@/types"


export default async function AuthAccess({
    children
}: AuthAccessProps) {
    const session = await auth();

    return (
        <div style={{ height: "100%" }}>
          {
            session && (
                <div>
                    <div>{children}</div>
                </div>
                
            )
          }

          {
            !session && (
                    <div className="w-full flex flex-col items-center justify-center" style={{ height: "100%" }}>
                        <h1>Sorry, but this content is locked.</h1>
                        <p className="mb-6">Please log into or create your <strong>SINC</strong> account.</p>
                        
                        <Link href="/">
                            <Button variant={"secondary"}>Login <User2Icon /></Button>
                        </Link>
                    </div>
            )
          }
        </div>
    )
}