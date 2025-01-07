import NextAuth from "next-auth"
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '@/server' 
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"



export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    secret: process.env.AUTH_SECRET!,
    session: {
        strategy: "jwt"
    },
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        allowDangerousEmailAccountLinking: true

    })],
})