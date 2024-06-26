import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../globals.css"
import Sidebar from "@/components/dashboard/Sidebar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        </body>
    </html>
  )
}
