"use client"
import React, { useState } from "react"
import Link from "next/link"
import {
  GrHomeRounded,
  MdOutlineExplore,
  PiUsersThree,
  PiHeart,
  IoIosHelpCircleOutline,
  PiGearSixLight,
  PiSignOut,
  FaBars,
} from "@/utils"
import style from "@/assets/styles/dashboard.module.css"
import { usePathname } from "next/navigation"

type SidebarLinkProps = {
  title: string
  path: string
  icon?: React.JSX.Element
}

const SidebarLink = ({ title, path, icon }: SidebarLinkProps) => {
  const pathname = usePathname()
  return (
    <li className={`${style.nav_link} ${pathname === path && style.active}`}>
      <Link href={path}>
        {icon}
        <span className={style.link}>{title}</span>
        <span className={style.tooltip}>{title}</span>
      </Link>
    </li>
  )
}

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <nav className={`sidebar ${showSidebar && 'expanded'}`}>
      <section>
        <header className="pt-2 pb-5 px-3 flex justify-between">
          <span className={style.logo}>
            <Link href="/">Recipe app</Link>
          </span>
          <FaBars
            size={24}
            className={style.menu_icon}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </header>
        <div className="flex flex-col gap-2">
          <SidebarLink
            title="Home"
            path="/dashboard"
            icon={<GrHomeRounded size={20} />}
          />
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
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-3">
          <hr className="py-1 mt-2" />
          <div className="upgrade flex flex-col gap-4 items-center justify-between min-h-40 bg-midnight_green rounded-lg p-3">
            <div className="w-12 h-12 rounded-3xl bg-white text-midnight_green"></div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-base font-bold text-white">
                Upgrade your account
              </span>
              <span className="text-sm text-white">
                Unlock exclusive features
              </span>
            </div>
            <button className="bg-white p-2 rounded-lg text-sm font-bold w-full">
              Upgrade to Pro
            </button>
          </div>
          <button
            className={`flex items-center p-3 justify-between rounded-lg hover:bg-pearl-900 transition-all`}
          >
            <div className="w-8 h-8 rounded-3xl bg-midnight_green grid place-items-center text-lg text-white">
              C
            </div>
            <div
              className={`flex flex-col gap-1 justify-start items-start ${style.button_content}`}
            >
              <span className="text-base text-gray-700 font-normal ">
                Log out
              </span>
              <span className="text-xs text-gray-500 font-normal ">
                email@gmail.com
              </span>
            </div>
            <div className={style.button_content}>
              <PiSignOut size={24} />
            </div>
          </button>
        </div>
      </section>
    </nav>
  )
}
