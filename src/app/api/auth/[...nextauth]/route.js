import { User } from "@/app/models/User";
import mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: 'credentials',
      secret: process.env.SECRET,
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials
        mongoose.connect(process.env.MONGODB_URI)
        const user = await User.findOne({ email })
        if (user && await user.comparePassword(password)) {
          return user
        }
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }