import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Github from "next-auth/providers/github";

import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) return false;

      const accountExists = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider: account?.provider,
            provider_account_id: account?.providerAccountId,
          },
        },
      });

      if (!accountExists) {
        const createdUser = await prisma.user.create({
          data: {
            id: user.id,
            name: user.name ?? `user ${user.id}`,
            created_at: new Date(),
            avatar_url: user.image,
          },
        });

        const createdAccount = await prisma.account.create({
          data: {
            user_id: createdUser.id,
            type: account?.type,
            provider: account?.provider,
            provider_account_id: account?.providerAccountId,
            refresh_token: account?.refresh_token,
            access_token: account?.access_token,
            expires_at: account?.expires_at,
            token_type: account?.token_type,
            scope: account?.scope,
            id_token: account?.id_token,
            session_state: account?.session_state,
          },
        });

        const expires = new Date();
        expires.setMinutes(
          expires.getMinutes() + (createdAccount.expires_at ?? 0),
        );

        await prisma.session.create({
          data: {
            expires,
            session_token: createdAccount.access_token ?? "",
            user_id: createdUser.id,
          },
        });

        user.id = createdUser.id;
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.id = token.id;
      return session;
    },
  },
};
