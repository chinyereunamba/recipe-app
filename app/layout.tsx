import "./globals.css"
import React from "react"
import Providers from "./providers"
import { getServerSession } from "next-auth"
import authOptions from "./api/auth/[...nextauth]/auth"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return <Providers session={session}>{children}</Providers>
}
