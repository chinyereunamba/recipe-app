import Home from "@/components/dashboard/Home"
import Sidebar from "@/components/dashboard/Sidebar"
import React from "react"

export default function Dashboard() {
  return (
    <main>
      <Sidebar />
        <Home />
    </main>
  )
}
