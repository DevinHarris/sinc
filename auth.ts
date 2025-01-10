import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter" 
import Google from "next-auth/providers/google"
import { db } from "@/server"


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    secret: process.env.AUTH_SECRET!,
    session: {
        strategy: "jwt",
        maxAge:  30 * 24 * 60 * 60,
    },
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!
    })]
})