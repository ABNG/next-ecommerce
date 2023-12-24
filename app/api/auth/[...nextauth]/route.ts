import { api } from "@/lib/axios_interceptor";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any) {
        // api.defaults.headers.common.Authorization = `Bearer ${credentials?.token}`;
        const user = credentials;
        if (!user) return null;
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },

  callbacks: {
    async jwt({ token, user, session }) {
      // console.log(`jwt callback`, { token, user, session });
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.picture = user.avatar;
      }
      return token;
    },
    async session({ session, token, user }) {
      // console.log(`session callback`, { token, user, session });
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
