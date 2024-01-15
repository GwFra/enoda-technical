import type { NextAuthConfig } from "next-auth";
import { NextRequest } from "next/server";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ request }: { request: NextRequest }) {
      const isOnHome = request.nextUrl.pathname.startsWith("/home");
      const token = request.cookies.get("access_token");
      // validate token?
      if (isOnHome) {
        if (token) return true;
        return false;
      } else if (token) {
        return true;
      }
      return true;
    },
  },
  providers: [],
};
