"use client"
import React from "react"
import {
  SessionProvider
} from "next-auth/react"
import { Session } from "next-auth"
type ProviderProps = {
  children: React.ReactNode
  session: Session | null
}

export default function Providers({ children, session }: ProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
