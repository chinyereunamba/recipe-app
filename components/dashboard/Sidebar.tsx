"use client"
import React from "react"
import Link from "next/link"
import {
  GrHomeRounded,
  MdOutlineExplore,
  PiUsersThree,
  PiHeart,
  IoIosHelpCircleOutline,
  PiGearSixLight,
} from "@/utils"
import style from "@/assets/styles/dashboard.module.css"
import { usePathname } from "next/navigation"

type SidebarLinkProps = {
  title: string
  path: string
  icon: React.JSX.Element
}

const SidebarLink = ({ title, path, icon }: SidebarLinkProps) => {
  const pathname = usePathname()
  return (
    <li className={`${style.nav_link} ${pathname === path && style.active}`}>
      <Link href={path}>
        {icon} {title}
      </Link>
    </li>
  )
}

export default function Sidebar() {
  return (
    <nav className="max-w-60 w-full min-h-screen fixed left-0 top-0 bg-white">
      <header className="py-12 text-center">
        <Link href={"/"}>
          <h4 className="">Recipe app</h4>
        </Link>
      </header>
      <div className="flex flex-col gap-3">
        <SidebarLink title="Home" path="/dashboard" icon={<GrHomeRounded size={20} />} />
        <SidebarLink
          title="Explore"
          path="/explore"
          icon={<MdOutlineExplore size={24} />}
        />
        <SidebarLink
          title="Community"
          path="/community"
          icon={<PiUsersThree size={24} />}
        />
        <SidebarLink
          title="Favorites"
          path="/favorites"
          icon={<PiHeart size={24} />}
        />
        <SidebarLink
          title="Help"
          path="/help"
          icon={<IoIosHelpCircleOutline size={24} />}
        />
        <SidebarLink
          title="Settings"
          path="/settings"
          icon={<PiGearSixLight size={24} />}
        />
      </div>
    </nav>
  )
}
