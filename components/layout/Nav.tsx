"use client"
import React, { useState } from "react"
import Link from "next/link"
import style from "@/assets/styles/layout.module.css"
import { FaBars } from "@/utils"

type NavLinkProps = {
  title: string
  path: string
}

const NavLink = ({ title, path }: NavLinkProps) => {
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

export default function Nav() {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className="nav sticky top-0">
      <div className="hidden md:flex gap-20 items-center">
        <h4 className="font-bold">Recipe app</h4>
        <ul className="flex items-center">
          <NavLink path="/" title="Home" />
          <NavLink path="/discover" title="Discover recipe" />
        </ul>
      </div>
      <div className="hidden md:flex items-center">
        <NavLink path="/sign-in" title="Log in" />
        <NavLink path="/sign-up" title="Sign up" />
      </div>

      {/* Mobile view */}
      <div className={`${style.mobile_nav} ${showNav && style.active}`}>
        <h4 className="font-bold">Recipe app</h4>
        <ul>
          <NavLink path="/" title="Home" />
          <NavLink path="/discover" title="Discover recipe" />
          <NavLink path="/sign-in" title="Log in" />
          <NavLink path="/sign-up" title="Sign up" />
        </ul>
        <div onClick={() => setShowNav(!showNav)} className="cursor-pointer">
          <FaBars size={24} />
        </div>
      </div>
    </nav>
  )
}
