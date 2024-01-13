import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      console.log(user);
      if (account) {
        const res = await fetch(`http://localhost:1880/auth/login`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${account?.id_token}`,
          },
        });
        const resParsed = await res.json();
        console.log(resParsed);
      }
      return token;
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnListings = nextUrl.pathname.startsWith("/listings");
      if (isOnListings) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("listings", nextUrl));
      }
      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId:
        "807452420141-r11jc2hdpsrv2tqcrlfvjgsghm4uac8b.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        let data = JSON.stringify({
          email: "something@123.com",
          password: "123",
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "localhost:1880/auth/login",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic YWRtaW46MTIz",
          },
          data: data,
        };
        const a = await fetch(data);
        console.log(a);
        console.log("WITHIN THE CREDENTIALS");
        console.log(credentials);
        return new Promise(() => {});
        // return { id: "apple" };
        // make request to backend
      },
    }),
  ],
};

// # Copy the contents into a .env file and populate the values below if no default is provided
// JWT_SECRET="ThisIsASecret"
// GOOGLE_CLIENT_ID="807452420141-r11jc2hdpsrv2tqcrlfvjgsghm4uac8b.apps.googleusercontent.com"
// GOOGLE_CLIENT_SECRET="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"
