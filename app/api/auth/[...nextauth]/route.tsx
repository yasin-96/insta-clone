import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    theme: {
        logo: "https://links.papareact.com/sq0",
        brandColor: "#F132287",
        colorSchme: "auto",
    },
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name.
                split(' ').join('').toLocaleLowerCase();

            session.user.uid = token.sub
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }