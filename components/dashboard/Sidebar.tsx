import React from "react"
import Link from "next/link"

type SidebarLinkProps = {
  title: string
  path: string
}

const SidebarLink = ({ title, path }: SidebarLinkProps) => {
  return (
    <li className="px-3 py-2">
      <Link
        href={path}
        className="text-base text-english_violet font-normal hover:font-medium transition-all"
      >
        {title}
      </Link>
    </li>
  )
}

export default function Sidebar() {
  return (
    <nav className="max-w-60 w-full min-h-screen fixed left-0 top-0 bg-white">
      <header className="py-12 text-center">
        <h4 className="">Recipe app</h4>
      </header>
      <div className="flex flex-col gap-3">
        <SidebarLink title="Home" path="/" />
        <SidebarLink title="Explore" path="/explore" />
        <SidebarLink title="Community" path="/community" />
        <SidebarLink title="Favorites" path="/favorites" />
        <SidebarLink title="Help" path="/help" />
        <SidebarLink title="Settings" path="/settings" />
      </div>
    </nav>
  )
}
