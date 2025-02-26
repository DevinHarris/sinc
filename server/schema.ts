import { table } from "console"
import { boolean, timestamp, pgTable, text, primaryKey, integer } from "drizzle-orm/pg-core"

import type { AdapterAccountType } from "next-auth/adapters"
import { number } from "zod"

export const users = pgTable("user", {
    id: text("id").primaryKey().notNull(),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    avatar: text("image"),
})

export const accounts = pgTable(
    "account",
    {
      userId: text("userId")  
      .primaryKey()
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      type: text("type").$type<AdapterAccountType>().notNull(),
      provider: text("provider").notNull(),
      providerAccountId: text("providerAccountId").notNull(),
      refresh_token: text("refresh_token"),
      access_token: text("access_token"),
      expires_at: integer("expires_at"),
      token_type: text("token_type"),
      scope: text("scope"),
      id_token: text("id_token"),
      session_state: text("session_state"),
    },
    (account) => [
      {
        compoundKey: primaryKey({
          columns: [account.provider, account.providerAccountId],
        }),
      },
    ]
  )
   

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = pgTable(
    "verificationToken",

    {
        indentifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },

    (verificationTokens) => [
        {
            compositePK: primaryKey({
                columns: [verificationTokens.indentifier, verificationTokens.token]
            })
        }
    ]
)

export const authenticators = pgTable("authenticator", {
    credentialId: text("credentialID").notNull().unique(),
    userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
}, 
    (authenticators) => [
        {
            compositePK: primaryKey({
                columns: [authenticators.userId, authenticators.credentialId]
            })
        }
    ]
)

export const accessCode = pgTable("accessCode", {
  code: text("code").primaryKey().notNull(),
  userId: text("userId").references(() => users.id, { onDelete: "cascade" }),
  active: boolean("active"),
  activated: timestamp("activated", { mode: "date" }),
  expires: timestamp("expires", { mode: "date" })

})

export const userWorkout = pgTable("userWorkout", {
  userWorkoutId: text("userWorkoutId").primaryKey(),
  userId: text("userId").references(() => users.id, { onDelete: "cascade" }),
  workoutId: text("workoutId"),
  workoutName: text("workoutName"),
  workoutNotes: text("workoutNotes"),
  completedExercises: text("completedExercises").array(),
  workoutMedia: text("workoutMedia"),
}, 
 (table) => {
  return [{
    pk: primaryKey({ columns: [table.userId, table.workoutId] }),
  }]
 }
)

export const workoutAnalytics = pgTable("workoutAnalytic", {
  workoutId: text("workoutId").primaryKey(),
  likes: integer("likes"),
  dislikes: integer("dislikes"),
  addsToWorkoutSpace: integer("addsToWorkoutSpace")
})