import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import AzureADProvider from "next-auth/providers/azure-ad";
import GoogleProvider from "next-auth/providers/google";



export const authOptions: AuthOptions = {
  secret:
    process.env.NEXTAUTH_SECRET !== undefined
      ? process.env.NEXTAUTH_SECRET
      : "",
  providers: [
    AzureADProvider({
      clientId: String(process.env.AZURE_AD_CLIENT_ID),
      clientSecret: String(process.env.AZURE_AD_CLIENT_SECRET),
      tenantId: process.env.AZURE_AD_TENANT_ID,

      checks: ["pkce"],
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID !== undefined ? process.env.GOOGLE_CLIENT_ID : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET !== undefined ? process.env.GOOGLE_CLIENT_SECRET : ""
    })

  ],

  pages: {
    signIn: "/",
    signOut: "/"
  },

  callbacks: {
    jwt: ({ token, account }) => {
      // console.log({token,user,account,profile})

      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      const iatToken = Number(token.iat);
      const iatDate = new Date(iatToken * 1000);
      const newSession = {
        ...session,
        access_token: token.access_token,
        expires_at: new Date(iatDate.getTime() + 30 * 60 * 1000),
      };

     
      return newSession;
    },
  },
};



const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
