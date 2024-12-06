import { type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from '@/services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        CredentialsProvider({
            name: "Recipe app",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<any> {
                return await signInWithEmailAndPassword(
                    auth, (credentials as any).email || "",
                    (credentials as any).password || ""
                )
                    .then(userCredentials => {
                        if (userCredentials.user) {
                            return userCredentials.user;
                        } return null
                    }).catch(error => new Error(error))
            }
        })
    ],
    pages: {
        signIn: "/sign-in",
        newUser: "/sign-up",

    },
    secret: process.env.NEXTAUTH_SECRET || "",
    // callbacks: {
    //     async signIn({ account, profile }) {

    //         return true // Do different verification for other providers that don't have `email_verified`
    //     },
    // }
}

export default authOptions

