import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "94601833711-1uiksr1f5q69mdq0v5kbshna87ub86h8.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin"
  }

}

export default NextAuth(authOptions)
