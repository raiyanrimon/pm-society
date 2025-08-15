import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {

  interface Session {
    user: {
     
      email: string
    } & DefaultSession["user"]
  
  }
}