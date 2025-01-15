"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { User2Icon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AuthAccessProps } from "@/types"


export default function AuthAccess({
    children
}: AuthAccessProps) {
    const { data: session } = useSession();

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